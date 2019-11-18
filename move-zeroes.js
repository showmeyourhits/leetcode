/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let shift = 0;
    
    while (i < nums.length ) {
        const num = nums[i];

        if (num === 0) {
            shift++;
        } else {
            nums[i - shift] = num;
        }
        i++;
    }

    i = nums.length - shift;

    while (i < nums.length) {
        nums[i] = 0;
        i++;
    }

    return nums;
};

module.exports = moveZeroes;
