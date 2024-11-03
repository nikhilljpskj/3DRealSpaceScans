const db = require('../config/db');

// Function to create a new booking
const createBooking = (bookingData) => {
    // Prepare the booking data for SQL insertion
    const preparedData = {
        ...bookingData,
        // Convert empty arrays to NULL
        additionalServices: bookingData.additionalServices.length > 0 ? bookingData.additionalServices : null,
        deliveryPreferences: bookingData.deliveryPreferences.length > 0 ? bookingData.deliveryPreferences : null,
        numberOfRooms: bookingData.numberOfRooms.length > 0 ? bookingData.numberOfRooms.join(',') : null, // Store as a string
        outputFormats: bookingData.outputFormats.length > 0 ? bookingData.outputFormats.join(',') : null, // Store as a string
    };

    const query = 'INSERT INTO bookings SET ?';
    return new Promise((resolve, reject) => {
        db.query(query, preparedData, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

// Function to get all bookings
const getBookings = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM bookings', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Function to get booking details by ID
const getBookingDetails = (id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT b.*, f.file_path AS filePath, f.file_type AS fileType
            FROM bookings b
            LEFT JOIN files f ON b.id = f.booking_id
            WHERE b.id = ?
        `;
        db.query(query, [id], (err, results) => {
            if (err) reject(err);
            else {
                // Collect files
                const bookingDetails = results.map(result => ({
                    ...result,
                    files: results.filter(r => r.filePath).map(r => ({
                        filePath: r.filePath,  // Ensure this matches the column name in your files table
                        fileType: r.fileType,
                        filename: r.filePath.split('/').pop(),
                    })),
                }))[0];

                resolve(bookingDetails);
            }
        });
    });
};

const updateStatus = (bookingId, status) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE bookings SET status = ? WHERE id = ?';
        db.query(query, [status, bookingId], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

const getPendingBookings = (page, limit) => {
    const offset = (page - 1) * limit;
    const query = `
        SELECT * FROM bookings
        WHERE status = 0
        LIMIT ? OFFSET ?
    `;
    return new Promise((resolve, reject) => {
        db.query(query, [limit, offset], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};



// Count total pending bookings
const countPendingBookings = () => {
    const query = `SELECT COUNT(*) AS count FROM bookings WHERE status = 0`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results[0].count);
        });
    });
};

// Count total bookings
const countAllBookings = () => {
    const query = `SELECT COUNT(*) AS count FROM bookings`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results[0].count);
        });
    });
};



// Export all the functions
module.exports = {
    createBooking,
    getBookings,
    getBookingDetails,
    updateStatus,
    countPendingBookings,
    countAllBookings,
    getPendingBookings,
};
