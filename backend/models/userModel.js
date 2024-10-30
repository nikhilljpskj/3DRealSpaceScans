const db = require('../config/db');

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

module.exports = {
  createUser,
  findUserByEmail,
};
