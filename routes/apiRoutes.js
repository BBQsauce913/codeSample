var fundArray = require("../data/funds");
var targetArray = require("../data/example");


module.exports = function(app) {
    app.get("/api/funds", function(req, res){
        res.json(fundArray);
    });

    app.get('/api/example', function(req, res){
        res.json(targetArray);
    });
}