import  mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Invalid email format'],
  },
  phone: {
    type: String,
    required: true,
  },
  helpOption: {
    type: String,
    required: true,
  },
  projectDetails: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const request = mongoose.model('Request', requestSchema);

export default request
