const path = require('path');
const fs = require('fs');

const { saveFile: saveFileModel } = require('../models/fileModel');

exports.saveFile = async (req, res) => {
    const { bookingId, files } = req.body;

    if (!bookingId) {
        return res.status(400).json({ message: "Booking ID is required" });
    }

    try {
        const savePromises = files.map(file => {
            return saveFileModel(bookingId, file.filePath, file.fileType);
        });
        await Promise.all(savePromises);
        res.status(200).json({ message: "Files paths saved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error saving file paths", error });
    }
};

// New function to handle file download
exports.downloadFile = (req, res) => {
    const filename = req.params.filename; // Get the filename from the request parameters
    const fileLocation = path.join(__dirname, '../uploads', filename); // Construct the path to the file

    // Log the filename being searched
    console.log(`Searching for file: ${filename} at location: ${fileLocation}`);

    // Check if the file exists
    fs.access(fileLocation, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`File not found: ${fileLocation}`);
            return res.status(404).json({ message: 'File not found' });
        }

        // Send the file for download
        res.download(fileLocation, (err) => {
            if (err) {
                console.error("Error sending file:", err);
                return res.status(500).json({ message: 'Error sending file', error: err });
            }
        });
    });
};