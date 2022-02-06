const express = require('express');
const Router = express.Router();
const ImageController = require('../controllers/imageController');

Router.get('/', ImageController.generateRandomImage);


module.exports = Router;