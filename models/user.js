import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter your name'],
    maxLength: [50, 'your name cannot exceed 50 character'],
  },
  email: {
    type: String,
    required: [true, 'please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'please input valid email'],
  },
  password: {
    type: String,
    required: [true, 'please enter your password'],
    minLength: [6, 'your password cannot lees 6 character'],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.User || mongoose.model('User', userSchema);
