import { Link, NavLink, useLocation } from "react-router-dom";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink id="wd-account-profile-link" to="/Kanbas/Account/Signin" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Signin
            </NavLink>
            <NavLink id="wd-account-profile-link" to="/Kanbas/Account/Signup" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Signup
            </NavLink>
            <NavLink id="wd-account-profile-link" to="/Kanbas/Account/Profile" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Profile
            </NavLink>
        </div>
    );
}