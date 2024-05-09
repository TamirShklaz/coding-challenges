// String is valid if all characters have the same frequency
// Or if after removing 1 character they all have the same frequency

// Take a string turn it into a frequency map
// If all frequencies are equal then return YES
// Loop through the map and keep a track of all unique freqnecy counts,
// If there are more than 2 return NO
// If subtratcing one from the freqnecu count is equal to the other


function isValid(s: string) {
    let map = buildMap(s)
    console.log(map)
    if (allEqual(map)) {
        return "YES"
    } else {
        const uniqueFreq = new Set<number>();
        let max = {key: map.keys().next().value, value: map.values().next().value}
        console.log(max)
        for (let k of map.keys()) {
            console.log(map.get(k))
            if (map.get(k)! > max.value) {
                max = {key: k, value: map.get(k)!}
            }
        }
        map.set(max.key, max.value - 1)
        if (allEqual(map)) {
            return "YES"
        } else {
            return "NO"
        }
    }

}

function allEqual(map: Map<string, number>) {
    let startingFreq = map.values().next().value
    for (let freq of map.values()) {
        if (freq !== startingFreq) {
            return false
        }
    }
    return true

}

function buildMap(s: string) {
    const map = new Map<string, number>()

    for (let c of s) {
        if (map.has(c)) {
            map.set(c, map.get(c)! + 1)
        } else {
            map.set(c, 1)
        }
    }

    return map
}

console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"))

