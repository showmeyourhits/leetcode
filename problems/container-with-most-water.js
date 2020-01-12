/**
 * @param {number[]} heights 
 * @returns number
 */
var containerWithMostWater = function(heights) {
    let l = 0;
    let r = heights.length - 1;
    let maxASS = 0;

    while (l < r) {
        const rH = heights[r];
        const lH = heights[l];
        const h = Math.min(lH, rH);
        let ass = (r - l) * h;
        maxASS = Math.max(ass, maxASS);

        if (lH < rH) {
            l++
        } else {
            r--;
        }
    }

    return maxASS;
};

module.exports = containerWithMostWater;
