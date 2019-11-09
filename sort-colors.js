/**
 * @param {number[]} nums 
 */
var sortColors = function(nums) {
    /**
     * @param {number} a 
     * @param {number} b 
     */
    const swap = (a, b) => {
        const tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    }

    let zero = 0, two = nums.length - 1;
    let i = 0;

    while (i <= two) {
        if (nums[i] == 2) {
            if (two != i) {
                swap(i, two);
            } else {
                i++;
            }
            two--;
        } else if (nums[i] == 0) {
            if (zero != i) {
                swap(i, zero);
            } else {
                i++;
            }
            zero++
        } else {
            i++;
        }
    }

    return nums;
};

module.exports = sortColors;
