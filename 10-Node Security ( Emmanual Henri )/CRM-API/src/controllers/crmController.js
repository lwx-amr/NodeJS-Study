import mongoose from "mongoose";
import ContactShcema from "../models/crmModel.js";

const Contact = mongoose.model('Contact',ContactShcema);

const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, newContact)=>{
    if(err)
      res.send(err);
    res.json(newContact);
  });
}

const getContacts = (req,res) => {
  Contact.find({}, (err, data) => {
    if(err)
      res.send(err);
    res.send(data);
  });
};

const getSomeContact = (req,res) => {
  Contact.find({firstname: req.params.fname}, (err, contact) => {
    if(err)
      res.send(err);
    res.send(contact);
  });
};

const updateContact = (req, res) => {
  Contact.findOneAndUpdate({firstname: req.params.fname}, req.body, { new : true}, (err, contact) =>{
    if(err)
      res.send(err);
    res.send(contact);
  });
}

const deleteContact = (req, res) => {
  Contact.findOneAndDelete({firstname: req.params.fname}, (err) =>{
    if(err)
      res.send(err);
    res.json({"message": `Contact with name: ${req.params.fname} is successfully deleted!`});
  });
}

module.exports = { addNewContact, getContacts , getSomeContact, updateContact, deleteContact};
