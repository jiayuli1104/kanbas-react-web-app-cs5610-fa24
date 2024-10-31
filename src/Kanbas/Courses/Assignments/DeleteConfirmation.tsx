import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAssignment } from './reducer';

interface DeleteConfirmationProps {
  assignmentId: string;
  assignmentTitle: string;
}

export default function DeleteConfirmation({ assignmentId, assignmentTitle }: DeleteConfirmationProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="modal fade" id={`delete-modal-${assignmentId}`} tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">Delete Assignment</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete the assignment "<strong>{assignmentTitle}</strong>"?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}