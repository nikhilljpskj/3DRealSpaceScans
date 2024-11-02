// TopNavbar.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-64 z-10"
      style={{ width: "calc(100vw - 256px)", paddingRight: "16px" }}
    >
      <div className="text-xl font-bold">Admin Dashboard</div>
      <div className="relative">
        <button
          className="hover:bg-gray-700 px-4 py-2 rounded-lg focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {email}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => navigate("/account")}
            >
              Profile
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
