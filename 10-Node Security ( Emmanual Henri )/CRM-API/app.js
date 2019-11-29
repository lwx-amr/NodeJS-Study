import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import helmet from "helmet";
import RateLimit from "express-rate-limit";
import routes from "./src/routes/crmRoute";

const app = express();
const port = 3000;

// Setup HTTP protection with helmet
app.use(helmet());

// Setup Rate limit to prevent DOS 
const limiter = new RateLimit({
  windowMs: 15*60*1000,             // 15 min is the time of our cycle
  max: 100,                         // Max number of requests
  delayMs:0                         // Disable dalay bentween each request
  // This mean each ip will be able to make only 100 request in each 15 min and there is no dealy between requests
});

// Static files serving
app.use(express.static('public'));

// Setup mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// JWT setup
app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=== 'JWT'){
    jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
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
