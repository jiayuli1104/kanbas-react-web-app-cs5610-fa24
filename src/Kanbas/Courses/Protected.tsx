import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as courseClient from "../Courses/client";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments = [] } = useSelector((state: any) => state.enrollmentReducer || { enrollments: [] });
  const [people, setPeople] = useState<any[]>([]);

  const fetchPeople = async () => {
    const users = await courseClient.findUsersForCourse(cid as string);
    setPeople(users);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return children;
}

