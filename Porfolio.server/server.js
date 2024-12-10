import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import requestroute from './routes/clientrequest.route.js';  // Make sure to include the .js extension
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Middleware
app.use(express.json()); // Allows us to parse JSON in the body of requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB:", err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, From Xavinex Server!');
});

app.use('/request', requestroute);  // Ensure this is correct

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
