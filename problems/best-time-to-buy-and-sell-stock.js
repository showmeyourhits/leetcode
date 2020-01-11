/**
 * 
 * @param {number[]} prices 
 * @returns number
 */
var bestTimeToBuyAndSellStock = function(prices) {
    const len = prices.length;
    if (len < 2) return 0;
    let max = prices[len - 1];
    let maxDiff = 0;

    for(let i = len - 2; i >= 0; i--) {
        const curr = prices[i];
        const diff = max - curr;

        if (diff > maxDiff) {
            maxDiff = diff;
        } else if (diff < 0) {
            max = curr;
        }
    }

    return maxDiff;
};

module.exports = bestTimeToBuyAndSellStock;
