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
    <div className="min-h-screen flex bg-gray-100">

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        </header>

        {/* User Details Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Details</h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-gray-600">
            <strong>User ID:</strong> {userId}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Booking pending review
            </h3>
            <p className="text-gray-500">Nikhil ::Show this data here.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              All time booking
            </h3>
            <p className="text-gray-500">Overall booking or monthly. update the value and field accordingly</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
