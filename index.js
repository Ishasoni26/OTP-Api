const express = require('express');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// OTP Generation function
const generateOTP = () => {
  const otp = crypto.randomInt(100000, 999999).toString(); // 6-digit OTP
  return otp;
};

// API Endpoint to generate OTP
app.get('/generate-otp', (req, res) => {
  const otp = generateOTP();
  res.json({ otp });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
