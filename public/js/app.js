function retire(retirement) {

    retirement = 50000;
    
        lgCap = 0.38;
        midCap = 0.12;
        smCap = 0.08;
        intl = 0.26;
        realEstate = 0.04;
        bonds = 0.10;
        moneyMarket = 0.02;
        commodities = 0;
        targetDate = 0;

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
    
}

console.log("Retirement Amount: $" + retirement)
retire();

// var ratios = [];

// function getRatios(allocation) {
//     var allocation = [];
//       //iterate through lgCapArray expenseRatio's;
//       lgCapArray.forEach(function(item) {
//         //get the expense ratio
//         var val = [item.fund, item.expenseRatio];
//         //push 
//         allocation.push(val);
//       });
//     ratios.push(allocation);
//     console.log(allocation);
// }

// getRatios();