const moneyMarketArray = [
    {
        fund: "Fidelity Money Market",
        ticker: "SPRXX",
        category: "Money Market",
        expenseRatio: 0.42,
    },
]

moneyMarketArray.sort(function(a, b) {
    return a.expenseRatio - b.expenseRatio;
});

console.log(moneyMarketArray.sort());