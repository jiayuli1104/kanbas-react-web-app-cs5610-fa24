// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleShowAllCourses, enrollInCourse, unenrollFromCourse, setEnrollments } from "../Enrollments/reducer";
// import { isFaculty } from "../Account/roleCheck";
// import "./index.css";
// import * as enrollmentClient from "../Enrollments/client";

// export default function Dashboard({ courses, course, setCourse, addNewCourse,
//   deleteCourse, updateCourse }: {
//     courses: any[];
//     course: any;
//     setCourse: (course: any) => void;
//     addNewCourse: () => void;
//     deleteCourse: (course: any) => void;
//     updateCourse: () => void;
//   }
// ) {
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentsReducer);
//   const canEdit = currentUser?.role === 'FACULTY';
//   const isStudent = currentUser?.role === 'STUDENT';

//   const isEnrolled = (courseId: string) => {
//     return enrollments.some(
//       (enrollment: any) => 
//         enrollment.user === currentUser._id && 
//         enrollment.course === courseId
//     );
//   };

//   const handleEnrollment = async (courseId: string) => {
//     try {
//       if (isEnrolled(courseId)) {
//         await enrollmentClient.deleteEnrollment(currentUser._id, courseId);
//         dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
//       } else {
//         const enrollment = await enrollmentClient.createEnrollment(currentUser._id, courseId);
//         dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
//       }
//     } catch (error) {
//       console.error("Error handling enrollment:", error);
//     }
//   };

//   const displayedCourses = isStudent 
//     ? (showAllCourses ? courses : courses.filter((course) => isEnrolled(course._id)))
//     : courses;

//   useEffect(() => {
//     const loadEnrollments = async () => {
//         try {
//             const enrollments = await enrollmentClient.findAllEnrollments();
//             dispatch(setEnrollments(enrollments));
//         } catch (error) {
//             console.error("Error loading enrollments:", error);
//         }
//     };
//     loadEnrollments();
//   }, [dispatch]);

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">
//         Dashboard
//         {isStudent && (
//           <button 
//             className="btn btn-primary float-end"
//             onClick={() => dispatch(toggleShowAllCourses())}>
//             {showAllCourses ? "Show Enrolled" : "Show All Courses"}
//           </button>
//         )}
//       </h1>
//       <hr />
//       {canEdit && (
//         <div>
//           <div className="d-flex justify-content-between align-items-center">
//             <h2>New Course</h2>
//             <div>
//               <button onClick={updateCourse} 
//                       className="btn btn-warning me-2">
//                 Update
//               </button>
//               <button onClick={addNewCourse} 
//                       className="btn btn-primary">
//                 Add
//               </button>
//             </div>
//           </div>
//           <input value={course.name} 
//                  className="form-control mb-2"
//                  onChange={(e) => setCourse({ ...course, name: e.target.value })} 
//                  placeholder="New Course" />
//           <textarea value={course.description}
//                     className="form-control mb-2"
//                     onChange={(e) => setCourse({ ...course, description: e.target.value })} 
//                     placeholder="New Description" />
//         </div>
//       )}
//       <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5" style={{ margin: '15px -15px' }}>
//           {displayedCourses.map((course) => (
//             <div className="wd-dashboard-course col" style={{ width: '270px', padding: '15px' }}>
//               {isStudent ? (
//                 isEnrolled(course._id) ? (
//                   <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none h-100">
//                     <div className="card rounded-3 overflow-hidden">
//                       <img src={course._id.length > 5 ? `/images/reactjs.jpg` : `/images/${course._id}.jpg`} alt={`Image for ${course.name}`} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
//                       <div className="card-body">
//                         <span className="wd-dashboard-course-link"
//                           style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden" }} >
//                           {course.name}
//                         </span>
//                         <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 53, overflow: "hidden" }}>
//                           {course.description}
//                         </p>
//                         <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
//                         {canEdit && (
//                           <>
//                             <button id="wd-edit-course-click"
//                               onClick={(event) => {
//                                 event.preventDefault();
//                                 setCourse(course);
//                               }}
//                               className="btn btn-warning ms-4 me-1">
//                               Edit
//                             </button>
//                             <button onClick={(event) => {
//                               event.preventDefault();
//                               deleteCourse(course._id);
//                             }} className="btn btn-danger float-end"
//                               id="wd-delete-course-click">
//                               Delete
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </Link>
//                 ) : (
//                   <div className="card rounded-3 overflow-hidden">
//                     <img src={course._id.length > 5 ? `/images/reactjs.jpg` : `/images/${course._id}.jpg`} alt={`Image for ${course.name}`} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
//                     <div className="card-body">
//                       <span className="wd-dashboard-course-link"
//                         style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden" }} >
//                         {course.name}
//                       </span>
//                       <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 53, overflow: "hidden" }}>
//                         {course.description}
//                       </p>
//                       <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
//                       {canEdit && (
//                         <>
//                           <button id="wd-edit-course-click"
//                             onClick={(event) => {
//                               event.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning ms-4 me-1">
//                             Edit
//                           </button>
//                           <button onClick={(event) => {
//                             event.preventDefault();
//                             deleteCourse(course._id);
//                           }} className="btn btn-danger float-end"
//                             id="wd-delete-course-click">
//                             Delete
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )
//               ) : (
//                 <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none h-100">
//                   <div className="card rounded-3 overflow-hidden">
//                     <img src={course._id.length > 5 ? `/images/reactjs.jpg` : `/images/${course._id}.jpg`} alt={`Image for ${course.name}`} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
//                     <div className="card-body">
//                       <span className="wd-dashboard-course-link"
//                         style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden" }} >
//                         {course.name}
//                       </span>
//                       <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 53, overflow: "hidden" }}>
//                         {course.description}
//                       </p>
//                       <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
//                       {canEdit && (
//                         <>
//                           <button id="wd-edit-course-click"
//                             onClick={(event) => {
//                               event.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning ms-4 me-1">
//                             Edit
//                           </button>
//                           <button onClick={(event) => {
//                             event.preventDefault();
//                             deleteCourse(course._id);
//                           }} className="btn btn-danger float-end"
//                             id="wd-delete-course-click">
//                             Delete
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               )}
//               {isStudent && (
//                 <button
//                   onClick={() => handleEnrollment(course._id)}
//                   className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'} mt-2 w-100`}>
//                   {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import * as db from "./Database";
import { useEffect } from "react";
import { addEnrollment, deleteEnrollment, findEnrollments } from "../Enrollments/reducer";
import { useRef } from "react";
import * as client from "../Enrollments/client";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse,  enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void; 
    updateEnrollment: (courseId: string, enrolled: boolean) => void }) {
    const dispatch = useDispatch();
    // const [displayAll, setDisplayAll] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const {enrollments} = useSelector((state: any) => state.enrollmentReducer);
    // const [selectedCourses, setSelectedCourses] = useState<any[]>([]); 
    // const [displayCourses, setDisplayCourses] = useState<any[]>([]);
    // const display = () => {
    //   fecthSelectedCourses();
    // };
    // const fecthSelectedCourses = () => {
    //   if (currentUser.role!=="STUDENT") {
    //     setSelectedCourses(courses);
    //   } else {
    //     setSelectedCourses(courses
    //       .filter((course) =>
    //       enrollments.some(
    //         (enrollment:any) =>
    //           enrollment.user === currentUser._id &&
    //           enrollment.course === course._id
    //           )));
    //   }
      
    //};
    // const fetchEnrollments = async() => {
    //   const enrollments = await client.fetchEnrollments();
    //   dispatch(findEnrollments(enrollments));
    // };
    const addNewEnrollment = async(courseId: string, userId: string) => {
      const enrollment = await client.createEnrollment(courseId, userId);
      dispatch(addEnrollment(enrollment));
    };
    const deleteEnrollments = async(courseId: string, userId: string) => {
      await client.deleteEnrollment(courseId, userId);
      const enrollment = {
        course: courseId,
        user: userId
      }
      dispatch(deleteEnrollment(enrollment));
    };
    // useEffect(() => {
    //   fecthSelectedCourses();
    //   fetchEnrollments();
    // },[]);
    // useEffect(() => {
    //   fecthSelectedCourses();
    // }, [ enrollments]);
    // useEffect(() => {
    //   fetchEnrollments();
    // }, []);
    // useEffect(() => {
    //   setDisplayCourses(displayAll || currentUser.role !== "STUDENT" ? courses : selectedCourses );
    // }, [ selectedCourses, courses, displayAll]);
    
  return (
    <div id="wd-dashboard">
      <div className="d-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {/* {currentUser.role === "STUDENT" && (
        <button onClick={() => {
          setDisplayAll(!displayAll);
          display();
        }} className="btn btn-primary ms-auto">Enrollments</button>
      )} */}
      <button onClick={() => setEnrolling(!enrolling)} className="ms-auto btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </div>
      <hr />
      {(currentUser.role === "FACULTY"||currentUser.role==="ADMIN") && (<h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => {
                    addNewCourse();
                    // const newCourse = { ...course, _id: new Date().getTime().toString() };
                    // setDisplayCourses([...courses, newCourse]);
                  }}> Add </button>
           <button className="btn btn-warning float-end me-2"
                onClick={() => {
                  updateCourse();
                  // setDisplayCourses(
                  //   courses.map((c) => {
                  //     if (c._id === course._id) {
                  //       return course;
                  //     } else {
                  //       return c;
                  //     }
                  //   })
                  // );
                }} id="wd-update-course-click">
            Update</button>

      </h5>)}
      <br />
      {(currentUser.role === "FACULTY" || currentUser.role==="ADMIN") && ( <input value={course.name} className="form-control mb-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>)}
      {(currentUser.role === "FACULTY" || currentUser.role==="ADMIN") && (<textarea value={course.description} className="form-control"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />)}
      {(currentUser.role === "FACULTY" || currentUser.role==="ADMIN") && ( <hr />)}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
          .map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
              <img src={course._id.length > 5 ? `/images/reactjs.jpg` : `/images/${course._id}.jpg`} alt={`Image for ${course.name}`} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                <Link to={course.enrolled || !enrolling? `/Kanbas/Courses/${course._id}/Home`: `/Kanbas/Dashboard`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  {/* <img src="/images/reactjs.png" width="100%" height={160} /> */}
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    {enrolling && (
                      <button onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }}
                       className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    
                    {(currentUser.role === "FACULTY" || currentUser.role==="ADMIN")&& <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                      //setDisplayCourses(courses);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                    </button>}
                    {(currentUser.role === "FACULTY" || currentUser.role==="ADMIN") && <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>}
                    {/* {currentUser.role === "STUDENT" && 
                    enrollments.some(
                      (enrollment : any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                        )
                    &&<button onClick={(event) => {
                      event.preventDefault();
                      deleteEnrollments(course._id, currentUser._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Unenroll
                    </button>}
                    {currentUser.role === "STUDENT" && 
                      !enrollments.some(
                        (enrollment : any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                          )
                     && <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        addNewEnrollment(course._id, currentUser._id);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Enroll
                    </button>} */}
                    
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);}