const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user.id);
    res.json({ token, userId: user.id, email: user.email, admin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const registerUser = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(name, email, mobile, hashedPassword);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const createSuperUser = async () => {
  const hashedPassword = await bcrypt.hash('adminpassword', 10);
  const email = "admin@example.com";

  try {
    
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      console.log(`Super user already exists. Login using "${email}".`);
      return;
    }

    await createUser('Admin', email, '0000000000', hashedPassword, true);
    console.log('Super user created successfully');
  } catch (error) {
    console.error('Error creating super user:', error);
  }
};



module.exports = {
  loginUser,
  registerUser,
  createSuperUser,
};
