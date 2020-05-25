// This is a CRUD route
const express = require('express');
const objectsRouter = express.Router();

// get all objects
objectsRouter.get('/', (req, res) => {
    res.send('Get all objects');
});

// create a new object
objectsRouter.post('/', (req, res) => {
    res.send('Add an object');
});

// edit an object
objectsRouter.put('/:id', (req, res) => {
    res.send('Edit an object');
});

// delete an object
objectsRouter.delete('/:id', (req, res) => {
    res.send('Delete an object');
});

module.exports = objectsRouter;
