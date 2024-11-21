import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    if (
        currentUser.role === "FACULTY" || currentUser.role === "TA" || (currentUser.role === "STUDENT" &&
            enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === cid
            )
        )) {
        return children;
    } else {
        return <Navigate to="/Kanbas/DashBoard" />;
    }
}