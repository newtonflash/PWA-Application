module.exports = (app, config) => {

    app.get("/", function(req, res){
        res.render('index');
    });
    app.get("/hotels/", function(req, res){
        res.render('hotel-details');
    });
};