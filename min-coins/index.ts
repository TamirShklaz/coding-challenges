const coins = [1, 4, 5]

type Result = {
    minCoins: number,
    coins: number[]
}
const memo = new Map<number, Result>()

function minCoins(coins: number[], sum: number): Result {
    let answer = Infinity
    let usedCoins: number[] = []
    if (memo.has(sum)) {
        // console.log(`Found ${sum}} returning ${memo.get(sum)}}`)
        return memo.get(sum)!
    }
    if (sum === 0) {
        answer = 0
    } else {
        for (let coin of coins) {
            if (coin <= sum) {
                const result = minCoins(coins, sum - coin)
                if (result.minCoins + 1 < answer) {
                    answer = result.minCoins + 1
                    usedCoins = [...result.coins, coin]
                }
            }
        }
    }
    let finalResult = {minCoins: answer, coins: usedCoins}
    memo.set(sum, finalResult)
    return finalResult
}

console.log(minCoins([1, 4, 5], 150))


// const getWaysMemo = new Map<number, number>
// const ways: number[][] = []
//
// function getWays(sum: number, coins: number[]): number {
//     let numWays = 1
//
//     if (getWaysMemo.has(sum)) {
//         // console.log(`Found ${sum}} returning ${memo.get(sum)}}`)
//         return getWaysMemo.get(sum)!
//     }
//     if (sum === 0) {
//         numWays ++
//     } else {
//         for (let coin of coins) {
//             if (coin <= sum) {
//                 numWays =  getWays(sum - coin, coins) +1
//             }
//         }
//     }
//
// getWaysMemo.set(sum, numWays)
// return numWays
// }
//
// console.log(getWays(4, [1, 2, 3]))