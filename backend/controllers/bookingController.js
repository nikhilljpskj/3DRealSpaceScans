const bookingModel = require('../models/bookingModel');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body; // Assuming booking data is sent in the body
        const result = await bookingModel.createBooking(bookingData);
        res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.getBookings();
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

// Get booking details by ID
exports.getBookingDetails = async (req, res) => {
    const { id } = req.params; // Get the ID from the URL parameters
    try {
        const bookingDetails = await bookingModel.getBookingDetails(id);
        if (!bookingDetails) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(bookingDetails);
    } catch (error) {
        console.error('Error fetching booking details:', error);
        res.status(500).json({ message: 'Error fetching booking details', error });
    }
};
