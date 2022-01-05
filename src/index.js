module.exports = function reverse(n) {
    const numToStr = String(Math.abs(n));
    const reverseStr = numToStr.split("").reverse().join("");
    return Number(reverseStr);
}
