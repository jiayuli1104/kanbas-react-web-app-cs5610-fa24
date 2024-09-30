export default function AssignmentEditor() {
    return (
      <div className="container mt-3">
        
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label ">Assignment Name</label>
          <input type="text" className="form-control" id="wd-name" placeholder="Enter assignment name" defaultValue="A1" />
        </div>
  
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label"></label>
          <textarea className="form-control" id="wd-description" rows={10} defaultValue={`The assignment is available online
  Submit a link to the landing page of your web application running on Netlify.
    
  The landing page should include the following:
  - Your full name and section
  - Links to each of the lab assignments
  - Link to the Kanbas application
  - Links to all relevant source code repositories
  
  The Kanbas application should include a link to navigate back to the landing page.`} />
  
        </div>
  
        
        <div className="mb-3 row align-items-start">
          <div className="col-3 text-end">
            <label htmlFor="wd-points" className="form-label pt-1">Points</label>
          </div>
          <div className="col">
            <input type="text" className="form-control" id="wd-points" defaultValue="100" />
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
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label mb-0"><strong>Due Date</strong></label>
              <input type="date" className="form-control" id="wd-due-date" />
            </div>
            <div className='row mb-3'>
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label mb-0" ><strong>Available From</strong></label>
                <input type="date" className="form-control" id="wd-available-from" defaultValue="2024-05-06" />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label mb-0" ><strong>Until</strong></label>
                <input type="date" className="form-control" id="wd-available-until" />
              </div>
            </div>
          </div> 
        </div>
  
        <div className="text-end mt-3">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-success" style={{background: 'red'}}>Save</button>
        </div>
      </div>
    );
  }