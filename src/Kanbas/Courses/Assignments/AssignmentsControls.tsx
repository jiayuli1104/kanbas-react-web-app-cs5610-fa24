import { FaSearch, FaPlus } from 'react-icons/fa';
export default function AssignmentsControls() {
  return (
    <div className="d-flex align-items-center justify-content-start pb-1 mb-3 text-nowrap">
      <div className="input-group me-5">
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input
          type="text"
          id="wd-search-assignment"
          className="form-control border-start-0"
          placeholder="Search..."
        />
      </div>
      <div className="d-flex  mb-3">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end d-flex align-items-center">
          <FaPlus className="me-1" /> 
          <span>Group</span>
        </button>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="me-1" /> 
          <span>Assignment</span>
        </button>
      </div>
    </div>
  )
}