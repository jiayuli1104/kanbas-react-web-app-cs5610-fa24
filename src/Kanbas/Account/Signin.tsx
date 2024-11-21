import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import { toggleShowAllCourses } from "../Enrollments/reducer";
import * as client from "./client";
export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch({ type: 'enrollments/reset' });
        dispatch({ type: 'assignments/reset' });
        dispatch(toggleShowAllCourses());
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    };
    return (
        <div id="wd-signin-screen" style={{ padding: '10px' }}>
            <h1>Sign in</h1>
            <input
                defaultValue={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })}
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
            />
            <input
                defaultValue={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })}
                className="form-control mb-2"
                placeholder="password"
                type="password"
                id="wd-password"
            />
            <button
                onClick={signin}
                id="wd-signin-btn"
                className="btn btn-primary w-100"
            >
                Sign in
            </button>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
