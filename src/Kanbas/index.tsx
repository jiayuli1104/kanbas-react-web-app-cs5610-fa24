import React from "react";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Navigate, Route, Routes } from "react-router";
import "./styles.css";
import * as db from "./Database";
import {useState} from "react";
import store from "./store";
import {Provider} from "react-redux";
export default function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const[course, setCourse] = useState<any>({
    _id:"RS130", name: "New Course", number: "New Number", 
    startDate: "2023-9-10", endDate: "2023-12-15",
    imageUrl: "/images/reactjs.jpg", 
    description:"New Description"
  });
  const addNewCourse = () => {
    const newCourse = {...course, _id: new Date().getTime().toString()};
    setCourses([...courses, {...course, ...newCourse}]);
  }
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
    console.log("delete successfully")
  }
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if(c._id === course._id){
          return course;
        }else{
          return c;
        }
      })
    )
  }
  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100 container-fluid">
        <div className="d-flex h-100">
          <div className="d-none d-md-block">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-3 p-md-4 p-lg-5">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              {/* <Route path="/Account/*" element={<Account />} /> */}
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} 
                />} />
              <Route path="Courses/:cid/*" element={
                <Courses courses={courses}/>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
    
  );
}

