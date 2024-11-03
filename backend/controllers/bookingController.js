const bookingModel = require('../models/bookingModel');
const { sendConfirmationEmail } = require('../mailer/mailer');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body; // Assuming booking data is sent in the body
        const result = await bookingModel.createBooking(bookingData);

        // Send confirmation email
        await sendConfirmationEmail(bookingData.email, {
            bookingId: result.insertId,
            date: bookingData.date, // Assuming these fields are in bookingData
            time: bookingData.time,
        });

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

exports.updateBookingStatus = async (req, res) => {
    const { bookingId } = req.params;
    const { status } = req.body;
    try {
        await bookingModel.updateStatus(bookingId, status); // Ensure bookingModel.updateStatus is defined
        res.status(200).json({ message: 'Booking status updated successfully' });
    } catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).json({ message: 'Error updating booking status' });
    }
};


exports.getPendingBookings = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10; // You can adjust this based on your needs

    try {
        const pendingBookings = await bookingModel.getPendingBookings(page, limit);
        const ptotalCount = await bookingModel.countPendingBookings();
        

        res.status(200).json({
            pendingBookings: pendingBookings,
            ptotalCount: ptotalCount,
        });
    } catch (error) {
        console.error('Error fetching pending bookings:', error);
        res.status(500).json({ message: 'Error fetching pending bookings', error });
    }
};

exports.getAllBookings = async (req, res) => {

    try {
        const atotalCount = await bookingModel.countAllBookings();
        
        res.status(200).json({
            atotalCount: atotalCount,
        });
    } catch (error) {
        console.error('Error fetching all bookings:', error);
        res.status(500).json({ message: 'Error fetching all bookings', error });
    }
};