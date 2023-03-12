import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
