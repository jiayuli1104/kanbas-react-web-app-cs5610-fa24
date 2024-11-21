import axios from "axios";
import * as db from "../Database";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({ 
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signin = async (credentials: any) => {
    try {
        const response = await axiosWithCredentials.post(
            `${USERS_API}/signin`, 
            credentials
        );
        return response.data;
    } catch (error) {
        const user = db.users.find(
            (u: any) => 
                u.username === credentials.username && 
                u.password === credentials.password
        );
        
        if (!user) {
            throw new Error("Invalid credentials");
        }
        return user;
    }
};

export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};
export const signup = async (user: any) => {
    try {
        const response = await axiosWithCredentials.post(
            `${USERS_API}/signup`, 
            user
        );
        return response.data;
    } catch (error) {
        const newUser = {
            ...user,
            _id: (db.users.length + 1).toString(),
            firstName: "",
            lastName: "",
            role: "STUDENT"
        };
        db.users.push(newUser);
        return newUser;
    }
};
export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};
export const updateUser = async (user: any) => {
    try {
        const response = await axiosWithCredentials.put(
            `${USERS_API}/${user._id}`, 
            user
        );
        return response.data;
    } catch (error) {
        const users = db.users.map((u: any) => 
            u._id === user._id ? { ...u, ...user } : u
        );
        return user;
    }
};
export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};
export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};
