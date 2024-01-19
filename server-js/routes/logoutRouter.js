const express = require('express');
const router = express.Router();

const logoutRouter = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};


module.exports = logoutRouter;
