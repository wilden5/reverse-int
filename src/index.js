module.exports = function reverse(n) {
    let result = '';
    let numberString = n.toString();
    for (i = numberString.length - 1; i >= 0; i--) {
        result += numberString[i];
    }
    return parseInt(result);
}
