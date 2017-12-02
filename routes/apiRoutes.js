var fundArray = require("../data/funds");

module.exports = function(app) {
    app.get("/api/funds", function(req, res){
        res.json(fundArray);
    });
}