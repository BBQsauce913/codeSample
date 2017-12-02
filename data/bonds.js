const bondArray = [
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
]

bondArray.sort(function(a, b) {
    return a.expenseRatio - b.expenseRatio;
});


module.exports = bondArray;