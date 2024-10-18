import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
export default function AssignmentEditor() {

  const {cid, aid} = useParams();
  console.log('Course ID:', cid, 'Assignment ID:', aid);
  const assignment = db.assignments.find(a => a._id === aid);
  console.log('Found assignment:', assignment);
  if(!assignment) return <p>Assignment not found</p>;
  return (
    <div className="container mt-3">
      {/* Display assignment name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label ">Assignment Name</label>
        <input type="text" className="form-control" id="wd-name" placeholder="Enter assignment name" defaultValue={assignment.title} />
      </div>
      {/* Display assignment description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Assignment Description</label>
        <textarea className="form-control" id="wd-description" rows={10} defaultValue={assignment.description ? assignment.description : ''} />
      </div>
       {/* Display points */}
      <div className="mb-3 row align-items-start">
        <div className="col-3 text-end">
          <label htmlFor="wd-points" className="form-label pt-1">Points</label>
        </div>
        <div className="col">
          <input type="text" className="form-control" id="wd-points" defaultValue={assignment.points}/>
        </div>
      </div>
      
      <div className="mb-3 row align-items-start">
        <div className="col-3 text-end">
          <label htmlFor="wd-group" className="form-label pt-1">Assignment Group</label>
        </div>
        <div className='col'>
          <select className="form-control" id="wd-group">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="exams">EXAMS</option>
            <option value="quizzes">QUIZZES</option>
          </select>
        </div>
      </div>
      
      <div className="mb-3 row align-items-start" >
       <div className="col-3 text-end">
        <label htmlFor="wd-display-grade-as" className="form-label pt-1">Display Grade as</label>
       </div>
        <div className='col'>
          <select className="form-control" id="wd-display-grade-as">
            <option value="points">Points</option>
            <option value="percentage">Percentage</option>
            <option value="letter-grade">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row align-items-start mb-3">
        <div className='col-3 text-end'>
          <label htmlFor="wd-submission-type" className="form-label pt-1">Submission Type</label>
        </div>
        <div className='col border p-3'>
          <div className='mb-3'>
            <select className="form-control" id="wd-submission-type">
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
            </select>
          </div>

          <fieldset className="border p-2">
            <legend className="w-auto p-2"><strong>Online Entry Options</strong></legend>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">
                Student Annotation
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </fieldset>
          
        </div>
      </div>



      <div className="row align-items-start mb-3">
        <div className="col-3 text-end">
          <label htmlFor="wd-display-assign" className="form-label pt-1">Assign</label>
        </div>
        <div className='col border p-3'>
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className="form-label mb-0"><strong>Assign To</strong></label>
            <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
          </div>
          {/* Due Date and Available Date */}
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label mb-0"><strong>Due Date</strong></label>
            <input type="date" className="form-control" id="wd-due-date" defaultValue={assignment.dueDate}/>
          </div>
          <div className='row mb-3'>
            <div className="col-md-6">
              <label htmlFor="wd-available-from" className="form-label mb-0" ><strong>Available From</strong></label>
              <input type="date" className="form-control" id="wd-available-from" defaultValue={assignment.availableDate} />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until" className="form-label mb-0" ><strong>Until</strong></label>
              <input type="date" className="form-control" id="wd-available-until" />
            </div>
          </div>
        </div> 
      </div>
      {/* Navigation buttons */}
      <div className="text-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-success" style={{background: 'red'}}>Save</Link>
      </div>
    </div>
  );
}