import { useParams, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments } from "./Assignments/reducer";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import PeopleTable from "./People/Table";
import * as client from "./client";
import * as courseClient from "./client";
import ProtectedRoute from "../Account/ProtectedRoute";
import * as assignmentClient from "./Assignments/client";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer || { assignments: [] });
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [people, setPeople] = useState<any[]>([]);
  const [assignment, setAssignment] = useState({
    _id: "-1",
    title: "New Assignment",
    points: 100,
    description: "New Assignment Description",
    due: "2024-10-20T23:59",
    course: cid,
    availableFrom: "2024-10-13T23:59",
    availableUntil: "2024-10-20T23:59"
  });

  const fetchPeople = async () => {
    const people = await courseClient.findUsersForCourse(cid as string);
    setPeople(people);
  };

  const fetchAssignments = async () => {
    const assignments = await assignmentClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchPeople();
    fetchAssignments();
  }, [cid]);

  if (!course) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h4>Piazza</h4> }  />
            <Route path="Zoom" element={<h4>Zoom</h4> } />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/new" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h4>Quizzes</h4> } />
            <Route path="Grades" element={<h4>Grades</h4> } />
            <Route path="People" element={<PeopleTable users={people} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}



  

