const express = require('express');
const app = express();

//require the JSON file and assign it to a variable called `notes`
const PORT = 3001;
const notes = require('./db/db.json')

// define/configure routes here
// the routes and route variables are identified in the index.js file
app.getNotes('/api/notes', function (req, res) {
    // for html route, html tag and text go here
    res.send('GET Request')
});
// post request gets data from submitted form
app.saveNote('/api/notes', function (req, res) {
    res.send('POST Request');
});

app.deleteNote(`/api/notes/${id}`, function (req, res) {
    res.send('DELETE Request');
});

const server = app.listen(3001, function () {
    console.log('Node server is running..');
});

// or sets up the Express app to handle data parsing
// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting static middleware - probably not going to use this..
app.use(express.static('public'));

// file to join get request with
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => res.json(notes));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

