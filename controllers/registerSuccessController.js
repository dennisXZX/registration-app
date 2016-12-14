const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Registrant = require('../public/models/user_model');

// create application/x-www-form-urlencoded parser 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

    app.post('/register-success', urlencodedParser, function(req, res){

        // connect to mongoDB database
        mongoose.createConnection('mongodb://test:test@ds133338.mlab.com:33338/customer_addressbook');

        // create an object
        let registrant = new Registrant({ name: req.body.name, nationality: req.body.nationality, occupation: req.body.occupation });

        // save the object to database
        registrant.save(function (err) {
            if (err) {
                console.log("Error: " + err);
            } else {
                console.log('data saved!');
            }
        });    

        // close the database connection
        mongoose.connection.close();

        res.render('register-success');

    });

};