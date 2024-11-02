const db = require('../config/db');
const bcrypt = require('bcrypt');
const createUser = (name, email, mobile, password, isAdmin = false) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (name, email, mobile, password, isAdmin) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, mobile, password, isAdmin], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
      const query = 'SELECT name, email, mobile FROM users WHERE id = ?';
      db.query(query, [userId], (err, results) => {
          if (err) return reject(err);
          resolve(results[0]); // return the first result
      });
  });
};

const updateUser = (id, userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashedPassword = userData.password;

      // Hash the password if it's provided and non-empty
      if (userData.password) {
        hashedPassword = await bcrypt.hash(userData.password, 10);
      }

      const query = `
        UPDATE users 
        SET 
            name = ?, 
            email = ?, 
            mobile = ?, 
            password = ? 
        WHERE id = ?
      `;

      const values = [
        userData.fullName,
        userData.email,
        userData.mobile,
        hashedPassword,
        id
      ];

      db.query(query, values, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    } catch (error) {
      reject(error); // Handle hashing error
    }
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  getUserById,
  updateUser,
};
