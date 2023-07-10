const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');

route.get('/', homeController.index);

route.get('/login/index', loginController.index);

module.exports = route;
