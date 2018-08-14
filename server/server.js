const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('../config/keys');

const authController = require('./controllers/authController');
const facebookController = require('./controllers/facebookController');
const userController = require('./controllers/userController');

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoUri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongod-orm');
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("content-type", "application/x-www-form-urlencoded");
    next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../react-ui/public/index.html'));
})

app.get('/api/getUserData', userController.checkDB, authController.createJWT, facebookController.getProfileData, userController.saveUserToDB, authController.createJWT, (req, res) => {
    res.send({name, email, picture, token});
})

app.get('/api/getUserFeed', authController.verifyJWT, facebookController.getUserFeed, (req, res) => {
    res.send({...res.locals.data.posts});
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});