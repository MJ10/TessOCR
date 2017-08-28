// import required modules
const express = require('express');
const cors = require('cors');
const api = require('./api');

// Initialize express server
let app = express();
app.use(express.static('dist'));
app.use(cors());

// Use routes for api endpoint
app.use('/api', api);

var port = process.env.PORT || 8080;

// Listen on port 3000
app.listen(port, () => {
    console.log("Listening on port ", port);
})
