const express = require('express');

const app = express();

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