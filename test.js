const fundArray = [
    {
        fund: "Vangaurd 500",
        ticker: "VFINX",
        category: "Large Cap Stocks",
        expenseRatio: 0.14,
    },
    {
        fund: "Fidelity ContraFund",
        ticker: "FCNTX",
        category: "Large Cap Stocks",
        expenseRatio: 0.68,
    },
    {
        fund: "Fidelity Mid Cap Index",
        ticker: "FSCLX",
        category: "Mid Cap Stocks",
        expenseRatio: 0.17,
    },
    {
        fund: "DFA US SMall Cap Value I",
        ticker: "DFSVX",
        category: "Small Cap Stocks",
        expenseRatio: 0.52,
    },
    {
        fund: "American Century Small Company",
        ticker: "ASQAX",
        category: "Small Cap Stocks",
        expenseRatio: 1.13,
    },
    {
        fund: "Vangaurd Developed Markets Index",
        ticker: "VDVIX",
        category: "International Stocks",
        expenseRatio: 0.17,
    },
    {
        fund: "American Funds Europacific Growth",
        ticker: "RERHX",
        category: "International Stocks",
        expenseRatio: 0.62,
    },
    {
        fund: "Lazard Emerging Markets Equity",
        ticker: "RLEMX",
        category: "International Stocks",
        expenseRatio: 1.09,
    },
    {
        fund: "Cohen & Steers",
        ticker: "CSRSX",
        category: "Real Estate",
        expenseRatio: 0.96,
    },
    {
        fund: "Wells Fargo Precious Metals",
        ticker: "EKWAX",
        category: "Precious Metals",
        expenseRatio: 1.09,
    },
    {
        fund: "PIMCO Total Return",
        ticker: "PTTRX",
        category: "Bonds",
        expenseRatio: 0.46,
    },
    {
        fund: "Fidelity Advisor Government Income",
        ticker: "FVIAX",
        category: "Bonds",
        expenseRatio: 0.76,
    },
    {
        fund: "Vangaurd Core Bond",
        ticker: "VCORX",
        category: "Bonds",
        expenseRatio: 0.25,
    },
    {
        fund: "Fidelity Money Market",
        ticker: "SPRXX",
        category: "Money Market",
        expenseRatio: 0.42,
    },
    {
        fund: "Target Date Fund",
        ticker: "TRRMX",
        category: "Target Date",
        expenseRatio: 0.76,
    },
];

var inquirer = require("inquirer");

var targetArray = [];

console.log("-----------------------------------------");
console.log("Investment Helper");
console.log("-----------------------------------------");

function start(){
    inquirer.prompt([
        {
            type: "input",
            name: "retirement",
            message: "Hello user, how much do you have to retire? $",
    
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
        }
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
        console.log("-----------------------------------------");
    
        console.log("-----------------------------------------");
        console.log("Here is your targeted investment amounts based off our 'fund expense ratio'")
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
                    moneyMarketInvest = retirement * moneyMarket;
                    console.log("Targeted Money Market Investments: $" + moneyMarketInvest);
                }
            
            lgCapSort();
            midCapSort();
            smCapSort();
            intlSort();
            realEstateSort();
            bondSort()
            moneyMarketSort();
        
        }
        fundSort();
    })
};




// Starts app
start();