import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();
  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
