import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login"); // Redirect to login if token is not present
    }
  }, [navigate]);

  // Retrieve user details from local storage
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    // Navigate to login page
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>User Details:</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>User ID:</strong> {userId}</p>
        <p><strong>Token:</strong> {localStorage.getItem("jwtToken")}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
      {/* Your Admin Dashboard Code */}
    </div>
  );
};

export default AdminDashboard;
