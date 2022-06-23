module.exports = function reverse(n) {
    if (n.toString().split("")[0] === "-") {
        return n.toString().slice(1).split("").reverse().join("");
    }
    return Number(n.toString().split("").reverse().join(""));
};
