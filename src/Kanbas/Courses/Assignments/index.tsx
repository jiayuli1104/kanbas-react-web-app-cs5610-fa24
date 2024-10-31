import React, { useEffect } from 'react';
import { FaPenSquare } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "./AssignmentHeader";
import LessonControlButtons from "./LessonControlButtons";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment } from "./reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  availableUntil?: string;
  editing?: boolean;
}
export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignments.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseAssignments = assignments.filter((assignment: Assignment) => assignment.course === cid);

  useEffect(() => {
    console.log('Course Assignments:', courseAssignments);
  }, [assignments, cid]);

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
  };

  return (
    <div id="wd-assignments" className="container mt-4">
      <AssignmentsControls onAddAssignment={handleAddAssignment} /><br />
      <AssignmentHeader />
      <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
        {courseAssignments.map((assignment : Assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
            <div className="col-1 d-flex align-items-center justify-content-start">
              <Link className="wd-assignment-link d-flex align-items-center p-2" to={`${assignment._id}`}>
                <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }}/>
                <FaPenSquare className="fs-3 " style={{ color: 'green' }} />
              </Link>
            </div>
            <div className="col-7 pt-3 pb-3">
              <div><strong>{assignment.title}</strong></div>
              <div>
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableDate} |
                <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end p-3">
              <LessonControlButtons assignmentTitle={assignment.title} assignmentId={assignment._id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}




