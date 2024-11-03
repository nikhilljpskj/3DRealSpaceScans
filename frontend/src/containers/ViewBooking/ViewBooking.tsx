import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";

interface Booking {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    preferredDate: string;
    serviceLocation: string;
}

const ViewBooking: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/api/booking/viewbooking');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftNavbar />
            <div className="flex-1 ml-64">
                <TopNavbar />
                <div className="p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">All Bookings</h1>
                    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-3 px-6 text-left font-semibold">Name</th>
                                    <th className="py-3 px-6 text-left font-semibold">Email</th>
                                    <th className="py-3 px-6 text-left font-semibold">Phone</th>
                                    <th className="py-3 px-6 text-left font-semibold">Preferred Date</th>
                                    <th className="py-3 px-6 text-left font-semibold">Service Location</th>
                                    <th className="py-3 px-6 text-left font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="border-b hover:bg-gray-100">
                                        <td className="py-4 px-6">{booking.fullName}</td>
                                        <td className="py-4 px-6">{booking.email}</td>
                                        <td className="py-4 px-6">{booking.phone}</td>
                                        <td className="py-4 px-6">{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                        <td className="py-4 px-6">{booking.serviceLocation}</td>
                                        <td className="py-4 px-6">
                                            <button
                                                onClick={() => navigate(`/booking-details/${booking.id}`)}
                                                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-150"
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {bookings.length === 0 && (
                            <div className="py-8 text-center text-gray-600">
                                No bookings available.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBooking;
