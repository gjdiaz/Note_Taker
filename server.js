// create server object to listen
const express = require('express');
const notesData = require('./db/db.json')

// import express function and invoke it to create express application server
const app = express();

//require the JSON file and assign it to a variable called `notes`
const PORT = 3001;

// setting static middleware to preprocess static files in public route
app.use(express.static('public'));



// define/configure routes (setting up listeners) here

/*app.get('/', function (req, res) {
    // for html route, html tag and text go here
    res.send('GET Request')
}); */

// file to join get request with... path must be required, like express, if being used
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 
// response object (res) gets passed into callback function so there is a way to initiate the response back once the request has been processed
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  }); 
// post request gets data from submitted form
app.post('/api/notes', function (req, res) {
    res.send('Note saved.');
});

// this is a delete "request handler" for this route
/* app.delete(`/api/notes/${id}`, function (req, res) {

//when I get a delete request to the above route, then call this function:
    res.send('Note deleted.');
}); */ 




// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



/* app.get('/api', (req, res) => {
    res.json(notesData)
}); */

// tells app to start listening for requests
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

