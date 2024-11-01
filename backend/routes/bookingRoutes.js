const express = require('express');
const bookingController = require('../controllers/bookingController');
const router = express.Router();

// Route to create a new booking
router.post('/create', bookingController.createBooking);

// Route to get all bookings
router.get('/viewbooking', bookingController.getBookings);

// Route to get a specific booking by ID
router.get('/bookingdetails/:id', bookingController.getBookingDetails);

module.exports = router;
