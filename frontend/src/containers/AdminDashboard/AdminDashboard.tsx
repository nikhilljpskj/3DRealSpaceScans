// AdminDashboard.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");

  return (
    <div className="flex">
      <main className="p-8 pt-20">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>User ID:</strong> {userId}</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
