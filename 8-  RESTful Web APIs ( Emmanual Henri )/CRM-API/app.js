import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoute";

const app = express();
const port = 3000;

// Static files serving
app.use(express.static('public'));

// Setup mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useUnifiedTopology: true,
  useNewUrlParser: true 
});

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize all routes
routes(app);

app.get('/', (req, res, next) => {
    res.status(200).send(`Response from server running on port ${port}`);
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
