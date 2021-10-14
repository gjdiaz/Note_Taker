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

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
}); 

// this directs the user to the notes.html from the Get Started link
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
  }); 

// post request gets data from submitted form

router.get('/api/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    console.log(notes);
    res.json(notes);
    console.log("Note loaded")
});


router.post('/api/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    let newNote = req.body;
    let id =
    notes.push(newNote);
    updateDb(notes);
    console.log("New note added");
    res.json(notes);
});

function updateDb(notes) {
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        return true;
    });
};

app.use(router);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// module.exports = router;
// this is a delete "request handler" for this route
// app.delete(`/api/notes/${noteId}`, function (req, res) {
//     console.log("note deleted")
//     res.send('Note deleted.');
// }); 

// tells app to start listening for requests
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

