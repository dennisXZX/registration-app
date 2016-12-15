const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;

// connect to mongoDB database
const DB_URL = 'mongodb://test:test@ds133338.mlab.com:33338/customer_addressbook';
mongoose.connect(DB_URL);

// require controllers
const homeController = require('./controllers/homeController');
const registerController = require('./controllers/registerController');
const guestlistController = require('./controllers/guestlistController');
const registerSuccessController = require('./controllers/registerSuccessController');

// set view engine to ejs
app.set('view engine', 'ejs');

// handle static files requests
app.use('/public/css/', express.static('./public/css'));
app.use('/public/js/', express.static('./public/js'));
app.use('/public/images/', express.static('./public/images'));

// fire controllers
homeController(app);
registerController(app);
guestlistController(app);
registerSuccessController(app);

app.listen(3000);