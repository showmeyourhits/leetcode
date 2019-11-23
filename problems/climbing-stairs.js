/**
 * @param {number} steps 
 * @returns {number}
 */
var climbStairs = function(steps) {
    let sum = 0;
    let last = 1;

    while (steps >= 0) {
        const tmp = sum;
        sum = sum + last;
        last = tmp;

        steps--;
    }

    return sum;
};

module.exports = climbStairs;
