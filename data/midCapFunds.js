const midCapArray = [
    {
        fund: "Fidelity Mid Cap Index",
        ticker: "FSCLX",
        category: "Mid Cap Stocks",
        expenseRatio: 0.17,
    },
]

midCapArray.sort(function(a, b) {
    return a.expenseRatio - b.expenseRatio;
});

console.log(midCapArray.sort());

module.exports = midCapArray;