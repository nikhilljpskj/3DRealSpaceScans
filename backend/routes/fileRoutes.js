const express = require('express');
const { saveFile, downloadFile } = require('../controllers/fileController');
const fileUploadMiddleware = require('../middlewares/fileUploadMiddleware');
const router = express.Router();

// Endpoint for uploading files
router.post('/upload', fileUploadMiddleware); // Use the middleware here

// Endpoint for saving file paths after booking is submitted
router.post('/save', saveFile);

// Serve uploaded files for download
router.get('/download/:filename', downloadFile);// Updated to use the controller function

module.exports = router;
