import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profilepic: {
    type: String,
    default: '',
  },
  coverpic: {
    type: String,
    default: '',
  },
  razorpayid: {
    type: String,
    default: '',
  },
  razorpaysecret: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});


const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
