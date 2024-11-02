const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { createSuperUser } = require('./controllers/authController');
const bookingRoutes = require('./routes/bookingRoutes');
const fileRoutes = require('./routes/fileRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(express.json());

// Create a temporary super user on server start
createSuperUser();

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/users', userRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
