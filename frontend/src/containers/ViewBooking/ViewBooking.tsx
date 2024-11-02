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
        <div className="flex">
            <LeftNavbar />
            <div className="flex-1 ml-64">
                <TopNavbar />
                <div className="flex flex-col p-6 w-full">
                    <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-600">
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Phone</th>
                                <th className="py-2 px-4 border-b">Preferred Date</th>
                                <th className="py-2 px-4 border-b">Service Location</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{booking.fullName}</td>
                                    <td className="py-2 px-4">{booking.email}</td>
                                    <td className="py-2 px-4">{booking.phone}</td>
                                    <td className="py-2 px-4">{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                    <td className="py-2 px-4">{booking.serviceLocation}</td>
                                    <td className="py-2 px-4">
                                        <button onClick={() => navigate(`/booking-details/${booking.id}`)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewBooking;
