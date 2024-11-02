const { getUserById } = require('../models/userModel');
const userModel = require('../models/userModel');
const db = require('../config/db');

exports.fetchUserDetails = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params; // Get user ID from URL parameters
    const { fullName, email, mobile, password } = req.body; // Destructure the fields you want to update

    try {
        // Update user details in the database
        await userModel.updateUser(id, { fullName, email, mobile, password });
        res.status(200).json({ message: 'User details updated successfully.' });
    } catch (error) {
        console.error('Error updating user details:', error);
        res.status(500).json({ message: 'Error updating user details', error });
    }
};

 exports.getUsers = (req, res) => {
    const query = 'SELECT id, name, email, mobile FROM users';
    db.query(query, (err, results) => {
      if (err) return res.status(500).json({ message: 'Error fetching users', error: err });
      res.json(results);
    });
  };

  
  exports.deleteUser = (req, res) => {
    const userId = req.params.userId;
    const query = 'DELETE FROM users WHERE id = ?';
  
    db.query(query, [userId], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error deleting user', error: err });
      res.json({ message: 'User deleted successfully' });
    });
  };