// create server object to listen
const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');

// import express function and invoke it to create express application server
const app = express();

// for heroku: const PORT = process.env.PORT || 3001;
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting static middleware to preprocess static files in public route
app.use(express.static('public'));

// hw readme says to use the method below... not sure how this is different than lines 28-30
/*app.get('*', function (req, res) {
    res.send('GET Request')
}); */

// file to join get request with... path must be required, like express, if being used
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 

// returns the content of the json file - BCS told me to include this to post data but it renders the notes.html page with the db.json and takes away the styling and functionality
/* app.get('/notes', (req, res) => {
    res.json(notes);
}); */

// this directs the user to the notes.html from the Get Started link
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  }); 

/*  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
  }); */

// post request gets data from submitted form
app.post('/notes', (req, res) => {
    res.send('Note saved.');
});

app.post('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// this is a delete "request handler" for this route
/* app.delete(`/api/notes/${id}`, function (req, res) {
    res.send('Note deleted.');
}); */ 

// tells app to start listening for requests
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

