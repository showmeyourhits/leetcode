/**
 * @param {number} number
 * @returns {number[]}
 */
var countingBits = function(number) {
    const res = new Array(number + 1).fill(0);
    const p = Math.ceil(Math.log2(number));

    for (let i = 0; i <= p; i++) {
        const step = 2**i;

        for (let j = step; j <= 2**p; j+=step*2) {
            for (let x = j; x < j+step && x <= number; x++) {
                res[x]++;
            }
        }
    }

    // console.log({res, p});
    return res;
};

var countingBitsOptimized = function(number) {
    const res = new Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        // const j = i - 2 ** Math.floor(Math.log2(i));
        const j = (i / 2) << 1;
        res[i] = 1 + res[j];
    }

    return res;
};



module.exports = countingBitsOptimized;
