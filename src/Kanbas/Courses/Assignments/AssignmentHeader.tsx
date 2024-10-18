import { BsGripVertical } from "react-icons/bs";
import AssignmentsTitleButtons from "./AssignmentsTitleButtons";

export default function AssignmentHeader() {
  return (
    <div className="d-title d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
      <div className="d-flex">
        <BsGripVertical className="me-2 fs-3" />
        <a id="wd-assignments-title" className="h3 text-decoration-none">
          <strong>ASSIGNMENTS</strong>
        </a>
      </div>
      <AssignmentsTitleButtons />
    </div>
  )
}