import { Link, NavLink } from "react-router-dom";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Home
            </NavLink>
            <NavLink id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Modules
            </NavLink>
            <NavLink id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Piazza
            </NavLink>
            <NavLink id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Zoom
            </NavLink>
            <NavLink id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Assignments" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Assignments
            </NavLink>
            <NavLink id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Quizzes" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Quizzes
            </NavLink>
            <NavLink id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Grades
            </NavLink>
            <NavLink id="wd-course-people-link" to="/Kanbas/Courses/1234/People" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>People
            </NavLink>
        </div>
    );
}