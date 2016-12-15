const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Registrant = require('../db/user_model');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

    app.post('/register-success', urlencodedParser, function(req, res) {

        // create an object
        let registrant = new Registrant({ name: req.body.name, nationality: req.body.nationality, occupation: req.body.occupation });
        
        console.log(registrant);

        // save the object to database
        registrant.save(function (err) {
            if (err) {
                console.log("Error: " + err);
            } else {
                console.log('data saved!');
            }
        });

        res.render('register-success');

    });

};