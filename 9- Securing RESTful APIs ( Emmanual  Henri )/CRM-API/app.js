import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

import User from "./src/models/userModel";
import routes from "./src/routes/crmRoute";

const app = express();
const port = 3000;

// Static files serving
app.use(express.static('public'));

// Setup mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useMongoClient: true
});

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// JWT setup
app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=== 'JWT'){
    jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs 5', (err, decode) => {
      if(err) { 
        req.user = undefined;
      } else {
        req.user = decode;
      }
      next();
    });
  } else {
    req.user = undefined;
    next();  
  }
});

// Initialize all routes
routes(app);

app.get('/', (req, res, next) => {
    res.status(200).send(`Response from server running on port ${port}`);
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
