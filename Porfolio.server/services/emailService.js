// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com', // Replace with your SMTP host (Gmail, Outlook, etc.)
//   port: 587, // For TLS, use port 587
//   secure: false, // true for port 465, false for other ports
//   auth: {
//     user: 'your_email@gmail.com', // Your email
//     pass: 'your_email_password_or_app_password', // Your email password or app password
//   },
// });

// const sendEmail = async (to, subject, message) => {
//   try {
//     const mailOptions = {
//       from: '"Your Company Name" <your_email@gmail.com>', // Sender address
//       to, // Recipient email
//       subject, // Subject line
//       html: message, // Email content in HTML format
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: %s', info.messageId);
//     return info;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// };

// module.exports = sendEmail;












// const express = require('express');
// const router = express.Router();
// const Request = require('../models/Request');
// const sendEmail = require('../services/emailService');

// // POST /api/requests
// router.post('/requests', async (req, res) => {
//   const { name, email, phone, helpOption, projectDetails } = req.body;

//   try {
//     // Validate input
//     if (!name || !email || !phone || !helpOption || !projectDetails) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Create and save the new request
//     const newRequest = new Request({
//       name,
//       email,
//       phone,
//       helpOption,
//       projectDetails,
//     });

//     await newRequest.save();

//     // Send email notification to the user
//     const subject = 'Request Received Successfully!';
//     const message = `
//       <h2>Hi ${name},</h2>
//       <p>Thank you for submitting your request. We have received the following details:</p>
//       <ul>
//         <li><strong>Name:</strong> ${name}</li>
//         <li><strong>Email:</strong> ${email}</li>
//         <li><strong>Phone:</strong> ${phone}</li>
//         <li><strong>Help Option:</strong> ${helpOption}</li>
//         <li><strong>Project Details:</strong> ${projectDetails}</li>
//       </ul>
//       <p>We will get back to you shortly.</p>
//       <p>Best regards,</p>
//       <p>Your Company Name</p>
//     `;

//     // Send email to the requester
//     await sendEmail(email, subject, message);

//     res.status(201).json({ message: 'Request submitted successfully, email sent!', newRequest });
//   } catch (error) {
//     console.error('Error saving request or sending email:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// module.exports = router;




import dotenv from 'dotenv'

dotenv.config();
import  nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to, subject, message) => {
  try {
    const mailOptions = {
      from: '"Xavinex" <' + process.env.EMAIL_USER + '>',
      to, 
      subject, 
      html: message, 
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// exports  sendEmail;
