import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

import DeleteConfirmation from './DeleteConfirmation';
interface LessonControlButtonsProps {
  assignmentTitle: string;
  assignmentId: string;
}

export default function LessonControlButtons({
  assignmentTitle,
  assignmentId,
}: LessonControlButtonsProps) {

  
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        data-bs-toggle="modal"
        data-bs-target={`#delete-modal-${assignmentId}`}
      />
      <DeleteConfirmation assignmentId={assignmentId} assignmentTitle={assignmentTitle} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      
    </div>
  );
}
