const smCapArray = [
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
]

smCapArray.sort(function(a, b) {
    return a.expenseRatio - b.expenseRatio;
});

console.log(smCapArray.sort());

module.exports = smCapArray;