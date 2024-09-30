import { FaPenSquare } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "./AssignmentHeader";
import LessonControlButtons from "../Modules/LessonControlButtons";  
 
export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <AssignmentsControls /><br />
      <AssignmentHeader />
      <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start">
            <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/123">
              <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }}/>
              <FaPenSquare className="fs-3 " style={{ color: 'green' }} />
            </a>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>A1</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
              <strong> Due</strong> May 13 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start me-2">
            <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/124">
              <BsGripVertical className="me-2 fs-3" style={{ color: 'black' }}/>
              <FaPenSquare className="fs-3" style={{ color: 'green' }} />
            </a>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>A2</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
              <strong> Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start me-2">
            <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/125">
              <BsGripVertical className="me-2 fs-3" style={{ color: 'black' }}/>
              <FaPenSquare className="fs-3" style={{ color: 'green' }} />
            </a>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>A3</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
              <strong> Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li>

      </ul>
    </div>
  );
}