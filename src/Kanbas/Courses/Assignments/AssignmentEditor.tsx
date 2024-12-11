import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as client from "./client";

interface Assignment {
  _id?: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [assignment, setAssignment] = useState<Assignment>({
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "2024-01-01",
    availableDate: "2024-01-01",
    course: cid || ""
  });

  const handleSave = async () => {
    if (!cid) {
      console.error("Course ID is missing");
      return;
    }

    try {
      console.log("Saving assignment:", assignment);
      const newAssignment = await client.createAssignment(cid, {
        ...assignment,
        course: cid
      });
      console.log("Server response:", newAssignment);
      
      if (newAssignment) {
        dispatch(addAssignment(newAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      } else {
        console.error("No response from server");
      }
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Assignment Editor</h2>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Available From</label>
        <input
          type="date"
          className="form-control"
          value={assignment.availableDate}
          onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
        />
      </div>
      <button className="btn btn-success me-2" onClick={handleSave}>
        Save
      </button>
      <button 
        className="btn btn-danger"
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
      >
        Cancel
      </button>
    </div>
  );
} 