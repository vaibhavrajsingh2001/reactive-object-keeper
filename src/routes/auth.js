const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.send('Get logged in user');
});

authRouter.post('/', (req, res) => {
    res.send('LogIn user');
});

module.exports = authRouter;