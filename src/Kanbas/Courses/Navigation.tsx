import { NavLink, useParams } from "react-router-dom";
export default function CoursesNavigation() {
    const { cid } = useParams();
    // const location = useLocation();

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <NavLink
                    key={link}
                    to={`/Kanbas/Courses/${cid}/${link}`}
                    className={({ isActive }) => 
                        "list-group-item border border-0" + 
                        (isActive ? " list-group-item active border border-0" : " list-group-item text-danger border border-0")
                    }
                >
                    {link}
                </NavLink>
            ))}
        </div>
    );
}