// create server object to listen
const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');
//const router = express.router;
// import express function and invoke it to create express application server
const app = express();

const PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting static middleware to preprocess static files in public route
app.use(express.static('public'));

// hw readme says to use the method below but it doesn't display the notes.html properly
/*app.get('*', function (req, res) {
    res.send('GET Request')
}); 
*/


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 

// this directs the user to the notes.html from the Get Started link
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  }); 

app.get('/api/notes', (req, res) => res.json(notes))

// post request gets data from submitted form

app.get('/api/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('/db/db.json'))
    res.json(notes);
    console.log("Note added")
});


app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return("New note added");
});

function updateDb() {
    fs.writeFileSync('/db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        return true;
    });
};

// this is a delete "request handler" for this route
/* app.delete(`/api/notes/${id}`, function (req, res) {
    res.send('Note deleted.');
}); */ 

// tells app to start listening for requests
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

