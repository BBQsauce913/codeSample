const realEstateArray = [
    {
        fund: "Cohen & Steers",
        ticker: "CSRSX",
        category: "Real Estate",
        expenseRatio: 0.96,
    },
]

realEstateArray.sort(function(a, b) {
    return a.expenseRatio - b.expenseRatio;
});

console.log(realEstateArray.sort());