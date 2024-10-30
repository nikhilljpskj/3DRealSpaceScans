const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { createSuperUser } = require('./controllers/authController');

dotenv.config();
const app = express();

app.use(express.json());

// Create a temporary super user on server start
createSuperUser();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
