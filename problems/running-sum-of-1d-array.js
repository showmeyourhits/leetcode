/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
 * @param {number[]} nums 
 */
var runningSumOf1DArray = function(nums) {
    /**
     * 
     * @param {{prev: number; res: number[]}} memo 
     * @param {number} number 
     * @returns {{prev: number; res: number[]}} result
     */
    // function reduceFn(memo, number) {
    //     const sum = number + memo.prev;
    //     memo.res.push(sum);
    //     memo.prev = sum;

    //     return memo;
    // }
    // nums.reduce(reduceFn, { res: [], prev: 0 }).res;

    nums.forEach((value, index, array) => {
        const newVal = value + (index === 0 ? 0 : array[index - 1]);
        array[index] = newVal;
    });

    return nums;
};

module.exports = runningSumOf1DArray;
