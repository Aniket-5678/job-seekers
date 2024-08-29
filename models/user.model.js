import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  resume: {
    type: String, // Path to the resume file
  },
},{timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;
