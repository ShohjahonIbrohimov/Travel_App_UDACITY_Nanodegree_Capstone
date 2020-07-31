// Endpoint
const appData = [];

// Express
var path = require('path');
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.use(express.static('dist'))

// Create a local server

const port = 7000;

const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`)
}

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// POST request
app.post('/', function (req, res) {
    appData[0] = req.body;
    console.log(appData);
})

const data = '{"name":"Shohjahon"}';

app.get('/', function (req, res) {
    console.log('Get request received!');
    res.send(data);
}) 