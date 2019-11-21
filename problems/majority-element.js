/**
 * 
 * @param {number[]} nums 
 */
var majorityElement = function(nums) {
    const map = nums.reduce((meme, num) => {
        const count = meme.get(num);
        if (count) {
            meme.set(num, count + 1);
        } else {
            meme.set(num, 1);
        }

        return meme;
    }, new Map());
    const majorCount = nums.length / 2;

    for (const [num, count] of map.entries()) {
        if (count >= majorCount) {
            return num;
        }
    }
};

module.exports = majorityElement;
