const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');

route.get('/', homeController.index);

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

module.exports = route;
