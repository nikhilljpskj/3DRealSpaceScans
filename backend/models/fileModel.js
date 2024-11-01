const db = require('../config/db');

const saveFile = (bookingId, filePath, fileType) => {
    const query = 'INSERT INTO files (booking_id, file_path, file_type) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(query, [bookingId, filePath, fileType], (err, result) => {
            if (err) {
                console.error("Database insertion error:", err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

exports.getFilesByBookingId = (bookingId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT file_path AS filePath, file_type AS fileType FROM files WHERE booking_id = ?',
            [bookingId],
            (err, results) => {
                if (err) reject(err);
                else resolve(results);
            }
        );
    });
};


module.exports = {
    saveFile
};
