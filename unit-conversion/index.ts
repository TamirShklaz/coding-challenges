//
// Given a list of unit conversions, such as 1 foot equals 12 inches or 1 meter equals 1000 millimeters, write a program that can generally convert from one unit to another.
//
// example facts:
// m = 3.28 ft
// ft = 12 in
// hr = 60 min
// min = 60 sec


// example queries:
//     2 m = ? in    --> answer = 78.72
//     13 in = ? m   --> answer = 0.330 (roughly)
//     13 in = ? hr  --> "not convertible"


const conversions = [
    {fromUnit: "m", toUnit: "ft", factor: 3.28},
    {fromUnit: "ft", toUnit: "in", factor: 12},
    {fromUnit: "hr", toUnit: "min", factor: 60},
    {fromUnit: "min", toUnit: "sec", factor: 60}
]


function dfs(start: string, end: string, visited = new Set<string>(), pathValue = 1) {
    if (start === end) {
        return pathValue
    }
    visited.add(start)
    const destinations = adjacencyList.get(start)
    for (const dest of destinations!) {
        if (!visited.has(dest.unit)) {
            const result: any = dfs(dest.unit, end, visited, pathValue * dest.weight)
            if (result !== -1.0) {
                return result
            }
        }
    }
    return -1.0
}

// construct a graph that connects units, each node represents a unit and the edges represent a weight.
// construct a graph that goes in both directions
// Use DFS to see if the nodes are connected
// As you traverse the graph multiply thee value by the weight of the edge.


const adjacencyList = new Map<string, Connection[]>();

function addNode(unit: string) {
    adjacencyList.set(unit, [])
}

function addEdge(fromUnit: string, toUnit: string, weight: number) {
    adjacencyList.get(fromUnit)!.push({unit: toUnit, weight})
}


conversions.forEach(c => {
    addNode(c.fromUnit)
    addNode(c.toUnit)
})

conversions.forEach(c => {
    addEdge(c.fromUnit, c.toUnit, c.factor)
    addEdge(c.toUnit, c.fromUnit, 1 / c.factor)
})

console.log(adjacencyList)


convert({value: 13, unit: "in"}, "m")

function convert(input: Input, desiredUnit: string) {
    const cumFactor = dfs(input.unit, desiredUnit)
    console.log(cumFactor)

    if (cumFactor >= 0) {
        console.log(input.value * cumFactor)
    } else {
        console.log("Not connected")
    }
}


type Input = {
    value: number
    unit: string
}

type Connection = {
    unit: string;
    weight: number;
}
