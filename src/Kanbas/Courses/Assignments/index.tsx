import { FaPenSquare } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "./AssignmentHeader";
import LessonControlButtons from "../Modules/LessonControlButtons";  
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams(); 
  const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container mt-4">
      <AssignmentsControls /><br />
      <AssignmentHeader />
      <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
        {courseAssignments.map(assignment => (
          <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
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
            <LessonControlButtons />
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}