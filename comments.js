// Create web server using express
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4001;

// Import file system module
const fs = require('fs');

// Import body-parser
const bodyParser = require('body-parser');

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors
app.use(cors());

// Create a GET route
app.get('/comments', (req, res) => {
  // Read file
  fs.readFile(__dirname + '/comments.json', (err, data) => {
    if (err) {
      throw err;
    }
    // Parse JSON object
    let comments = JSON.parse(data);
    // Send response
    res.send(comments);
  });
});

// Create a POST route
app.post('/comments', (req, res) => {
  // Read file
  fs.readFile(__dirname + '/comments.json', (err, data) => {
    if (err) {
      throw err;
    }
    // Parse JSON object
    let comments = JSON.parse(data);
    // Create new comment
    let newComment = {
      id: Date.now(),