import "./AssignmentStyles.css";
import { FaPlus } from "react-icons/fa";
export default function Operation() {
    return (
        <div className="float-end">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
        <button id="wd-view-progress" className="btn btn-lg  me-1 btn-secondary float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        View Progress </button>
      </div>
  );}