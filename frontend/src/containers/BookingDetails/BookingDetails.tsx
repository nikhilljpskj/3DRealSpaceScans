import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";

interface FileDetail {
    filePath: string;
    fileType: string;
    filename: string;
}

interface BookingDetail {
    fullName: string;
    email: string;
    phone: string;
    serviceLocation: string;
    preferredDate: string;
    files: FileDetail[];
}

const BookingDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [booking, setBooking] = useState<BookingDetail | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await axios.get(`/api/booking/bookingdetails/${id}`);
                setBooking(response.data);
            } catch (error) {
                console.error('Error fetching booking details:', error);
            }
        };
        fetchBookingDetails();
    }, [id]);

    const handleDownload = async (filePath: string) => {
        try {
            const response = await axios.get(`/api/files/download/${filePath.split('/').pop()}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filePath.split('/').pop()!);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    if (!booking) {
        return <p className="text-center">Loading booking details...</p>;
    }

    return (
        <div className="flex">
            <LeftNavbar />
            <div className="flex-1 ml-64">
                <TopNavbar />
                <div className="flex flex-col p-12 mt-20">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">Booking Details</h1>
                    <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Name:</label>
                                <p className="text-gray-800">{booking.fullName}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Email:</label>
                                <p className="text-gray-800">{booking.email}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Phone:</label>
                                <p className="text-gray-800">{booking.phone}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Service Location:</label>
                                <p className="text-gray-800">{booking.serviceLocation}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Preferred Date:</label>
                                <p className="text-gray-800">{new Date(booking.preferredDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Uploaded Files</h2>
                    {booking.files && booking.files.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {booking.files.map((file, index) => (
                                <div key={index} className="flex justify-between items-center border p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="text-gray-800">{file.filename}</span>
                                    <button
                                        onClick={() => handleDownload(file.filePath)}
                                        className="text-blue-500 hover:underline font-semibold"
                                    >
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No uploaded files available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
