const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the destination directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Create a unique file name
    }
});

// File filter to validate file size and type
const fileFilter = (req, file, cb) => {
    const fileSize = parseInt(req.headers['content-length']);
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Add more allowed types as needed

    // Check file size
    if (fileSize > 15 * 1024 * 1024) {
        return cb(new Error('File size exceeds limit of 15 MB'), false);
    }

    // Check file type
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Unsupported file type'), false); // Reject the file
    }
};

// Set up the multer upload middleware with storage and file filter
const upload = multer({ storage, fileFilter }).array('files', 10); // Allow multiple files

// Middleware to handle file upload
const fileUploadMiddleware = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message }); // Handle upload errors
        }

        // Map uploaded files to return their details
        const files = req.files.map(file => ({
            filename: file.filename,
            mimetype: file.mimetype
        }));

        // Send back the file details in the response
        res.status(200).json({ message: "Files uploaded successfully", files });
    });
};

module.exports = fileUploadMiddleware;
