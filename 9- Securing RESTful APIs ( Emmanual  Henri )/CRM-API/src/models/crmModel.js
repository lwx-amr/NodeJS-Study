import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactShcema = new Schema({
  firstname:{
    type: String,
    required: 'Enter first name'
  },
  lastname:{
    type: String,
    required: 'Enter last name'
  },
  email:{
    type: String,
  },
  type: String,
    company:{
  },
  phone:{
    type: Number,
  },
  created_date:{
    type: Date,
    default: Date.now
  }
});

export default ContactShcema;
