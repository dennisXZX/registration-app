const mongoose = require('mongoose');
const Registrant = require('../db/user_model');

module.exports = function(app) {

    app.get('/guestlist', function(req, res){

        // retrieve data from database
        Registrant.find({}, function(err, registrants){
            if(err) {
                throw err;
             } else {
                res.render('guestlist', {registrants: registrants});
            }
        });

    });

};