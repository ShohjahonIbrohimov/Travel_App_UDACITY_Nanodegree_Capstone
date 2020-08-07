

// Endpoint
const trips = [];

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
    // console.log('server running');
    // console.log(`running on localhost: ${port}`)
}



function testExpress() {
    app.get('/', function (req, res) {
        res.sendFile('dist/index.html');
    });

    return 'Post received successfully!';
}


// POST request
app.post('/test', function (req, res) {
    trips[0] = req.body;
    res.send(trips[0]);

    return 'Post received successfully!';
});

module.exports = testExpress(); 