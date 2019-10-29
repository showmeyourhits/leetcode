/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set();
    return nums.reduce((memo, num) => {
        if (set.has(num)) {
            memo -= num;
        } else {
            set.add(num);
            memo += num;
        }
        return memo;
    }, 0)
};

module.exports = singleNumber;