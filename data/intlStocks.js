const intlArray = [
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
]

intlArray.sort(function(a, b) {
    return a.expenseRatio - b.expenseRatio;
});

console.log(intlArray.sort());