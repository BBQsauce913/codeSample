const lgCapArray = [
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
]

module.exports = lgCapArray;

var ratios = [];

function getRatios(arrExpenseRatio) {
    var arrExpenseRatio = [];
      //iterate through lgCapArray expenseRatio's;
      lgCapArray.forEach(function(item) {
        //get the expense ratio
        var val = [item.fund, item.expenseRatio];
        //push 
        arrExpenseRatio.push(val);
      });
    ratios.push(arrExpenseRatio);
    console.log(arrExpenseRatio);
}

getRatios();
