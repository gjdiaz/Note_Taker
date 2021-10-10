const express = require('express');
const app = express();


// define/configure routes here

app.get('/', function (req, res) {
    // for html route, html tag and text go here
    res.send('<html><body><nav><a><h3> NewNote Goes Here </h3></a></nav></body></html>')
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});


const server = app.listen(3001, function () {
    console.log('Node server is running..');
});
