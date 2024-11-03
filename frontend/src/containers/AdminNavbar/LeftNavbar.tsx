import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LeftNavbar = () => {
    const [adminLevel, setAdminLevel] = useState(localStorage.getItem("admin"));
    const navigate = useNavigate();

    // Update the admin level state when it changes in localStorage
    useEffect(() => {
        const updateAdminLevel = () => setAdminLevel(localStorage.getItem("admin"));

        // Set up an event listener to detect changes in localStorage (like when logging in/out)
        window.addEventListener("storage", updateAdminLevel);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener("storage", updateAdminLevel);
    }, []);

    // Redirect to the correct dashboard if adminLevel is undefined (not logged in)
    useEffect(() => {
        if (adminLevel === null) {
            navigate("/login");
        }
    }, [adminLevel, navigate]);

    return (
        <div className="w-60 pt-16 bg-gray-900 text-white h-screen p-6 fixed shadow-lg">
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition duration-200">
                        <span className="ml-2">Dashboard</span>
                    </Link>
                </li>
                {/* Conditionally render "Add User" and "Users" based on adminLevel value */}
                {adminLevel === "1" && (
                    <>
                        <li>
                            <Link to="/signup" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition duration-200">
                                <span className="ml-2">Add Staff</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition duration-200">
                                <span className="ml-2">Staff Management</span>
                            </Link>
                        </li>
                    </>
                )}
                <li>
                    <Link to="/view-booking" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition duration-200">
                        <span className="ml-2">Bookings</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftNavbar;
