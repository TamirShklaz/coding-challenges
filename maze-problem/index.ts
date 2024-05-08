// Given an NxM grid how many ways can a rabit get from the top left to the bottom right if it can only move right or down.


type CoOrd = {
    x: number,
    y: number
}

let directions = ["down", "right"]


type Result = {
    found: boolean,
    numWays: number
}

function findPath(rows: number, cols: number, currentCoOrd: CoOrd): number {
    let numWays = 0
    let found = false
    if (currentCoOrd.x === cols - 1 && currentCoOrd.y === rows - 1) {
        numWays = 1
    } else {
        for (let dir of directions) {
            if (dir === "down" && currentCoOrd.y + 1 < rows) {
                let newCoOrd = {x: currentCoOrd.x, y: currentCoOrd.y + 1}
                numWays = findPath(rows,cols, newCoOrd)
                if (numWays >= 1) {
                    numWays += 1
                }
            }
            if (dir === "right" && currentCoOrd.x + 1 < cols) {
                let newCoOrd = {x: currentCoOrd.x + 1, y: currentCoOrd.y}
                numWays = findPath(rows,cols, newCoOrd)
                if (numWays >= 1) {
                    numWays += 1
                }
            }
        }
    }
    return numWays
}

const numWays = findPath(2, 2, {x: 0, y: 0})
console.log(numWays)