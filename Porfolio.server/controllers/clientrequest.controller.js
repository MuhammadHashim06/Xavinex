import request from "../models/Request.js";
import {sendEmail} from '../services/emailService.js'
export const sendrequest = async (req, res) => {
    const { name, email, phone, helpOption, projectDetails } = req.body;
  
    try {
      // Validate input
      if (!name || !email || !phone || !helpOption || !projectDetails) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create and save the new request
      const newRequest = new request({
        name,
        email,
        phone,
        helpOption,
        projectDetails,
      });
  
      await newRequest.save();
  
      // Send email notification to the user
      const subject = 'Request Received Successfully!';
      const message = `
        <h2>Hi ${name},</h2>
        <p>Thank you for submitting your request. We have received the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Help Option:</strong> ${helpOption}</li>
          <li><strong>Project Details:</strong> ${projectDetails}</li>
        </ul>
        <p>We will get back to you shortly.</p>
        <p>Best regards,</p>
        <p>Xavinex inc.</p>
      `;
  
      // Send email to the requester
      await sendEmail(email, subject, message);
  
      res.status(201).json({ message: 'Request submitted successfully, email sent!', newRequest });
    } catch (error) {
      console.error('Error saving request or sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

export const getrequests = async (req,res)=>{
res.send('Get all request')
}