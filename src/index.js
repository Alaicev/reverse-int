module.exports = function reverse(n) {
    let result = "";
    let str = String(n)

    for (let i = str.length-1; i >= 0; i--){
        result+= str[i]
    }
    if (n < 0) {
        result = result.slice(0, -1)
    }
    return result
}
