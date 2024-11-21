export default function DeleteAssignmentWarning({ dialogTitle, assignmentTitle, assignmentId, deleteAssignment }:
    { dialogTitle: string; 
      assignmentTitle: string; 
      assignmentId: string;
      deleteAssignment: (assignmentId: string) => void; 
    }) {
      return (
        <div
          id={`delete-assignment-modal-${assignmentId}`}
          className="modal fade"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        > 
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the assignment  
                  <span className="fw-bold">
                    {` ${assignmentTitle}? `} 
                  </span>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel </button>
                <button onClick={()=> deleteAssignment(assignmentId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                  OK</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    

