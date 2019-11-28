import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";

const register = (req, res) => {
  const newUser = User(req.body);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if(err){
      return res.status(400).send({
        message: err
      })
    }else{
      newUser.hashPassword = undefined;
      res.status(200).send(newUser);
    }
  })
};

const login = (req, res) =>{
  User.findOne({
    email: req.body.email
  },(err, user) => {
    if(err)
      throw err;
    if(!user)
      res.status(401).json({message: "Authenticaiton faild. No user found!!"})
    else if (user){
      if(!user.comparePassword(req.body.password, user.hashPassword))
        res.status(401).json({message: "Authenticaiton faild. Wrong password!!"})
      else{
        res.json({token: jwt.sign({
            email: user.email,
            username: user.username,
            id: user._id,
        },'RESTFULAPIs')});
      } 
    }
  });
}

const loginRequired  = (req, res, next) => {
  if(req.user)
    next();
  else
    return res.status(401).json({message: "Unauthorized user!!"});
};

module.exports = {
  register,
  login,
  loginRequired
}
