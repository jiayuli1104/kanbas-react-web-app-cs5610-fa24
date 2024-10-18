import { IoEllipsisVertical } from "react-icons/io5";
import {BsPlus} from "react-icons/bs"
import "./styles.css"
export default function AssignmentsTitleButtons() {
  return (
    <div>
      <span className="col-2 p-2 fs-6 border border-1 border-secondary custom-border-radius">40% of Total</span>
      <BsPlus className="fs-4"/>
      <IoEllipsisVertical className="fs-4" />
    </div> 
  )
}