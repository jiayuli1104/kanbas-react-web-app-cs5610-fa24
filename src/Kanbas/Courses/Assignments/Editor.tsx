import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  availableUntil?: string;
  editing?: boolean;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = useSelector((state: any) => state.assignments.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState<Partial<Assignment>>({
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableDate: '',
    availableUntil: ''
  });

  useEffect(() => {
    if (aid) {
      const existingAssignment = assignments.find((a: Assignment) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  const handleSave = () => {
    if (aid) {
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setAssignment(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container mt-3">
      {/* Display assignment name */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Assignment Title</label>
        <input type="text" className="form-control" id="title" name="title" value={assignment.title} onChange={handleChange} />
      </div>
      {/* Display assignment description */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name="description" rows={10} value={assignment.description} onChange={handleChange} />
      </div>
      {/* Display points */}
      <div className="mb-3 row align-items-start">
        <div className="col-3 text-end">
          <label htmlFor="points" className="form-label pt-1">Points</label>
        </div>
        <div className="col">
          <input type="text" className="form-control" id="points" name="points" value={assignment.points} onChange={handleChange} />
        </div>
      </div>
      
      <div className="mb-3 row align-items-start">
        <div className="col-3 text-end">
          <label htmlFor="group" className="form-label pt-1">Assignment Group</label>
        </div>
        <div className='col'>
          <select className="form-control" id="group" name="group"  onChange={handleChange}>
            <option value="assignments">ASSIGNMENTS</option>
            <option value="exams">EXAMS</option>
            <option value="quizzes">QUIZZES</option>
          </select>
        </div>
      </div>
      
      <div className="mb-3 row align-items-start">
        <div className="col-3 text-end">
          <label htmlFor="displayGradeAs" className="form-label pt-1">Display Grade as</label>
        </div>
        <div className='col'>
          <select className="form-control" id="displayGradeAs" name="displayGradeAs"  onChange={handleChange}>
            <option value="points">Points</option>
            <option value="percentage">Percentage</option>
            <option value="letter-grade">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row align-items-start mb-3">
        <div className='col-3 text-end'>
          <label htmlFor="submissionType" className="form-label pt-1">Submission Type</label>
        </div>
        <div className='col border p-3'>
          <div className='mb-3'>
            <select className="form-control" id="submissionType" name="submissionType"  onChange={handleChange}>
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
            </select>
          </div>

          <fieldset className="border p-2">
            <legend className="w-auto p-2"><strong>Online Entry Options</strong></legend>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="textEntry" name="textEntry"  onChange={handleChange} />
              <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="websiteUrl" name="websiteUrl"  onChange={handleChange} />
              <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="mediaRecordings" name="mediaRecordings" onChange={handleChange} />
              <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="studentAnnotation" name="studentAnnotation"  onChange={handleChange} />
              <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="fileUploads" name="fileUploads"  onChange={handleChange} />
              <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
            </div>
          </fieldset>
          
        </div>
      </div>

      <div className="row align-items-start mb-3">
        <div className="col-3 text-end">
          <label htmlFor="displayAssign" className="form-label pt-1">Assign</label>
        </div>
        <div className='col border p-3'>
          <div className="mb-3">
            <label htmlFor="assignTo" className="form-label mb-0"><strong>Assign To</strong></label>
            <input type="text" className="form-control" id="assignTo" name="assignTo" defaultValue={'Everyone'} onChange={handleChange} />
          </div>
          {/* Due Date and Available Date */}
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label mb-0"><strong>Due Date</strong></label>
            <input type="date" className="form-control" id="dueDate" name="dueDate" defaultValue={assignment.dueDate} onChange={handleChange} />
          </div>
          <div className='row mb-3'>
            <div className="col-md-6">
              <label htmlFor="wd-available-from" className="form-label mb-0"><strong>Available From</strong></label>
              <input type="date" className="form-control" id="availableFrom" name="availableFrom" defaultValue={assignment.availableDate} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until" className="form-label mb-0"><strong>Until</strong></label>
              <input type="date" className="form-control" id="availableUntil" name="availableUntil" defaultValue={assignment.availableUntil} onChange={handleChange} />
            </div>
          </div>
        </div> 
      </div>

      {/* Navigation buttons */}
      <div className="text-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-success">Save</button>
      </div>
    </div>
  );
}