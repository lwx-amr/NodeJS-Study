import express from "express";
import favicon from "serve-favicon"
import path from  "path";

import data from "./data/data.json";

const app = express();
const PORT = 3000;

// Express built-in static files serving middleware
app.use(express.static('public'));
app.use('/images',express.static('images'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// JSON data
// { "hello": "JSON is great"}
// URLEncoded data
// hello = URLEncoded is great

// Express built-in json and URLEncoded middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// POST method to use this middleware
app.post('/newItem',(req, res, next) => {
    console.log(req.body);
    res.send(req.body);
});

// GET Methods
app.get('/',(req, res) =>{
    // Get the data
    res.status(200);
    res.json(data);
});

app.get('/item/:id',(req, res, next) => {
    let userID = Number(req.params.id);
    res.status(200).json(data[userID]);
    // Middleware that uses req object
    console.log(`Request form: ${req.originalUrl}`);
    console.log(`Request form: ${req.method}`);
    next();
},  (req, res) =>{
    console.log(`Did you recieved a response on port ${PORT}`);
});


// Route methods for /item
app.route('/item')
    .get((req, res) => {
        //res.end() //To end communincation
        //res.status(200).redirect('https://www.google.com');
        //res.download('images/rocket.jpg') // download item
        throw new Error();
    })
    .post((req, res) =>{
        res.status(200).send(`A post request on route /newItem with port ${PORT} is sent`);
    })
    .put((req, res) => {
        res.status(200).send(`A put request on route /item with port ${PORT} is sent`);
    })
    .delete((req, res) =>{
        res.status(200).send(`A delete request on route /item with port ${PORT} is sent`);
    });

// Error Handling function
app.use((err, req, res, next) =>{
    res.status(500).send(`Red Alert! Red Alert!!: ${err.stack}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port  ${PORT}`);
    //console.log(data);
});
