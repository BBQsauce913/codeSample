var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

var inquirer = require("inquirer");

console.log("-----------------------------------------");
console.log("Investment Helper");
console.log("-----------------------------------------");

function start(){
    inquirer.prompt([
        {
            type: "input",
            name: "retirement",
            message: "Hello user, how much do you have to retire (enter percents as decimals? $",
    
        },
        {
            type: "input",
            name: "lgCap",
            prefix: "Enter your targeted percentage amounts for each investment option: ",
            message:"Large Cap Stocks?",
        },
        {
            type: "input",
            name: "midCap",
            message: "Mid Cap Stocks?",
        },
        {
            type: "input",
            name: "smCap",
            message: "Small Cap Stocks?"
        },
        {
            type: "input",
            name: "intl",
            message: "International Stocks?",
        },
        {
            type: "input",
            name: "realEstate",
            message: "Real Estate?",
        },
        {
            type: "input",
            name: "bonds",
            message: "Bonds?",
        },
        {
            type: "input",
            name: "markets",
            message: "Money Markets?",
        },

        {
            type: "input",
            name: "commodities",
            message: "Commodities?"
        },
        {
            type: "input",
            name: "targetDate",
            message: "Target Dates?"
        },
    ]).then(function(user) {
    
        console.log("-----------------------------------------");
        console.log("Here are you targeted investment options!");
        console.log("Large Cap Stocks: " + user.lgCap);
        console.log("Mid Cap Stocks: " + user.midCap);
        console.log("Small Cap Stocks: " + user.smCap);
        console.log("International Stocks: " + user.intl);
        console.log("Real Estate: " + user.realEstate);
        console.log("Bonds: " + user.bonds);
        console.log("Money Markets: " + user.markets);
        console.log("Commodities: " + user.commodities)
        console.log("Target Date: " + user.targetDate)
        console.log("-----------------------------------------");
    
        function fundSort () {
            
                retirement = user.retirement;
            
                lgCap = user.lgCap;
                midCap = user.midCap;
                smCap = user.smCap;
                intl = user.intl;
                realEstate = user.realEstate;
                bonds = user.bonds;
                moneyMarket = user.markets;
                commodities = user.commodities;
                targetDate = user.targetDate;

                // if (
                //     lgCap +
                //     midCap +
                //     smCap +
                //     intl +
                //     realEstate +
                //     bonds +
                //     moneyMarket +
                //     commodities +
                //     targetDate !== 1) {
                //         console.log("Does not add up.");
                //         start();
                // }

                console.log("-----------------------------------------");
                console.log("Here is your targeted investment amounts based off our 'fund expense ratio'")
                console.log("-----------------------------------------");
        
                function lgCapSort() {
                    var lgCapInvest = retirement * lgCap;
                    console.log("Targeted Large Cap Stock Investment: $" + lgCapInvest)
                }
        
                function midCapSort() {
                    var midCapInvest = retirement * midCap;
                    console.log("Targeted Mid Cap Stock Investment: $" + midCapInvest);
                }
        
                function smCapSort() {
                    var smCapInvest = retirement * smCap;
                    console.log("Targeted Small Cap Stock Investment: $" + smCapInvest);
                }
        
                function intlSort() {
                    var intlInvest = retirement * intl;
                    console.log("Targeted International Stock Investments: $" + intlInvest);
                }
        
                function realEstateSort() {
                    var realEstateInvest = retirement * realEstate;
                    console.log("Targeted Real Estate Investments: $" + realEstateInvest);
                }
        
                function bondSort() {
                    var bondInvest = retirement * bonds;
                    console.log("Targeted Bond Investments: $" + bondInvest);
                }
        
                function moneyMarketSort() {
                    var moneyMarketInvest = retirement * moneyMarket;
                    console.log("Targeted Money Market Investments: $" + moneyMarketInvest);
                }

                function commoditieSort() {
                    var commoditieInvest = retirement * commodities;
                }

                function targetDateSort() {
                    var targetDateInvest = retirement * targetDate;
                }
            
            lgCapSort();
            midCapSort();
            smCapSort();
            intlSort();
            realEstateSort();
            bondSort()
            moneyMarketSort();
            commoditieSort();
            targetDateSort();
        
            // if (lgCapInvest + 
            //     midCapInvest + 
            //     smCapInvest + 
            //     intlInvest + 
            //     realEstateInvest + 
            //     bondInvest + 
            //     moneyMarketInvest + 
            //     commoditieInvest + 
            //     targetDateInvest === user.retirement) {
            //         fundSort();
            //     } 
            //     else {
            //         console.log("Your targeted percentages do not add up!");
            //         start();
            //     }
            
        }
        fundSort();
    })
};


// Starts app
start();


// Starts Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });