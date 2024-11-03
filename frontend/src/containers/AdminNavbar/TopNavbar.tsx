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
      className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-60 z-10 shadow-lg"
      style={{ width: "calc(100vw - 240px)" }}
    >
      <div className="text-2xl font-semibold tracking-wide">3DRealSpace Scans</div>
      <div className="relative">
        <button
          className="flex items-center space-x-2 hover:bg-gray-800 px-4 py-2 rounded-lg focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{email}</span>
          <svg
            className={`transform transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            } w-4 h-4`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20">
            <button
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
              onClick={() => {
                setDropdownOpen(false);
                navigate("/account");
              }}
            >
              Profile
            </button>
            <button
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
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
