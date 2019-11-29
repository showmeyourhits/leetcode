/**
 * @param {number[]} nums 
 */
var findAllNumbersDisappearedInAnArray = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const j = Math.abs(nums[i]) - 1;
        if (nums[j] > 0) {
            nums[j] = -nums[j];
        }
    }

    return nums.reduce((res, value, index) => {
        if (value > 0) {
            res.push(index + 1);
        }
        return res;
    },[]);
};

module.exports = findAllNumbersDisappearedInAnArray;

/**
 * @param {number[]} nums 
 */
var findAllNumbersDisappearedInAnArrayFirstAttempt = function(nums) {
    const n = nums.length;
    if (!n) return nums;
    const res = [];
    nums.sort((a,b) => a-b);

    nums.reduce((prev, curr, index) => {
        const diff = curr - prev;
        if (diff > 1) {
            while(curr - prev !== 1) {
                res.push(++prev);
            }
        } else if (index === 1 && prev !== 1) {
            let el = 1;
            while (el !== prev) {
                res.push(el++);
            }
        } else if (index === n - 1 && curr !== n) {

            while(curr !== n) {
                res.push(++curr);
            }
        } 

        return curr;
    });

    return res;
};
