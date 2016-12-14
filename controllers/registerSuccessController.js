const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create application/x-www-form-urlencoded parser 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

    app.post('/register-success', urlencodedParser, function(req, res){

        // connect to mongoDB database
        mongoose.createConnection('mongodb://test:test@ds133338.mlab.com:33338/customer_addressbook');

        // define a schema
        let Person = mongoose.model('Person', { name: String, nationality: String, occupation: String });

        // create an object
        let registrant = new Person({ name: req.body.name, nationality: req.body.nationality, occupation: req.body.occupation });

        // save the object to database
        registrant.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('data saved!');
            }
        });    

        // close the database connection
        mongoose.connection.close();

        res.render('register-success');

    });

};