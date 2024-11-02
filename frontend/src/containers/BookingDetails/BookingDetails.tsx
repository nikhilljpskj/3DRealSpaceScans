import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LeftNavbar from "containers/AdminNavbar/LeftNavbar"; 
import TopNavbar from "containers/AdminNavbar/TopNavbar"; 
import { useNavigate } from 'react-router-dom';

interface FileDetail {
    filePath: string;
    fileType: string;
    filename: string; // Changed to 'filename' to match the example response structure
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
                // Ensure that the response includes files
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
                responseType: 'blob', // Important for handling binary data
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filePath.split('/').pop()!); // Set the filename
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    if (!booking) {
        return <p>Loading booking details...</p>;
    }

    return (
        <div className="flex">
            <LeftNavbar />
            <div className="flex-1 ml-64">
                <TopNavbar />
                <div className="flex flex-col p-6">
                    <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
                    <div className="mb-4 bg-white p-4 rounded-lg shadow-md">
                        <div className="grid grid-cols-2 gap-4">
                            <p className="font-semibold">Name:</p>
                            <p>{booking.fullName}</p>
                            
                            <p className="font-semibold">Email:</p>
                            <p>{booking.email}</p>
                            
                            <p className="font-semibold">Phone:</p>
                            <p>{booking.phone}</p>
                            
                            <p className="font-semibold">Service Location:</p>
                            <p>{booking.serviceLocation}</p>
                            
                            <p className="font-semibold">Preferred Date:</p>
                            <p>{new Date(booking.preferredDate).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-2">Uploaded Files</h2>
                    {booking.files && booking.files.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {booking.files.map((file, index) => (
                                <div key={index} className="border p-2 flex justify-between items-center bg-white rounded-lg shadow-md">
                                    <span>{file.filename}</span> {/* Display the filename */}
                                    <button 
                                        onClick={() => handleDownload(file.filePath)} 
                                        className="text-blue-500 hover:underline"
                                    >
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No uploaded files available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
