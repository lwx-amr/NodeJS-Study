import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  hashPassword:{
    type:String,
    required: true
  },
  created_date:{
    type:Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = (pass, hashPass) => {
  return bcrypt.compareSync(pass, hashPass);
};

export const User = mongoose.model('User', UserSchema);
