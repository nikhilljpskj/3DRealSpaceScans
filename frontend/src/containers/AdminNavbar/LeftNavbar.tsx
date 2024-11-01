
import React from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4 fixed">
      <div className="text-2xl font-bold mb-8">3DRealSpaceScans</div>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-300">
            Manage Users
          </Link>
        </li>
        <li>
          <Link to="/view-booking" className="hover:text-gray-300">
            Bookings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbar;
