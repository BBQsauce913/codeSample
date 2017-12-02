var fundArray = require("../data/funds");
var lgCapArray = require("../data/largeCapFunds");
var midCapArray = require("../data/midCapFunds");
var smCapArray = require("../data/smallCapFunds");
var intlArray = require("../data/intlStocks");
var realEstateArray = require("../data/realEstate");
var bondsArray = require("../data/bonds");
var moneyMarketArray = require("../data/moneyMarket");

module.exports = function(app) {
    app.get("/api/funds", function(req, res){
        res.json(fundArray);
    });

    app.get("/api/funds/lgCap", function(req, res){
        res.json(lgCapArray);
    });
    
    app.get("/api/funds/midCap", function(req, res){
        res.json(midCapArray);
    });

    app.get("/api/funds/smCap", function(req, res){
        res.json(smCapArray);
    });

    app.get("/api/funds/intl", function(req,res){
        res.json(intlArray);
    });

    app.get("/api/funds/realEstate", function(req, res){
        res.json(realEstateArray);
    });

    app.get("/api/funds/bonds", function(req, res){
        res.json(bondsArray);
    });

    app.get("/api/funds/moneyMarket", function(req, res){
        res.json(moneyMarketArray);
    })
}