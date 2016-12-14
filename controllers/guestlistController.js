module.exports = function(app) {

    app.get('/guestlist', function(req, res){
        res.render('guestlist');
    });

};