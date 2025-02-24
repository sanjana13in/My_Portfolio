// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.post('/api/Contact',(req,res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  // Setup Nodemailer transporter (example using Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // e.g., your_email@gmail.com
      pass: process.env.EMAIL_PASS,  // your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Form Submission',
    text: `New message from:
Name: ${name}
Email: ${email}
Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
