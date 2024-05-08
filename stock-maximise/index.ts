// Your algorithms have become so good at predicting the market that you now know what the share price of Wooden Orange
// Toothpicks Inc. (WOT) will be for the next number of days.
//
// Each day, you can either buy one share of WOT, sell any number of shares of WOT that you own, or not make any
// transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?
// return the max profit

// 1,2,100 -> 197 - Maximise the number of shares you have on the max day

// 1,2,100,1 -> 197
// 1,2,100,100 -> 197
// 1,2,100,101 -> 198
// 99,1,2,100,101
// 1,2,100, 1,2,100
// 1,2,101, 1,2,100

// Start at the right as long as p(n) > p(n-k)
// Keep the sum of the difference between the biggest element and every smaller element to the left of it
// When p(n-k) > p(n) start again

function stockMaximise(prices: number[]) {
    let maxProfit = 0
    let currentMax = prices[prices.length - 1]
    for (let k = prices.length - 2; k >= 0; k--) {
        if (prices[k] > currentMax) {
            currentMax = prices[k]
        } else {
            maxProfit += currentMax - prices[k]
        }
    }
    return maxProfit
}

console.log(stockMaximise([1,2,101, 1,2,100]))