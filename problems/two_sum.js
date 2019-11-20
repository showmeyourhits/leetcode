var twoSum = function(nums, target) {
    let hash = new Map();
    let i = 0;

    while (i < nums.length) {
        hash.set(nums[i], i);
        i++;
    }

    i = 0;

    while (i < nums.length) {
        const comp = target - nums[i];
        if (hash.has(comp) && hash.get(comp) !== i) {
            return [i, hash.get(comp)]
        }
        i++;
    }


    return [-1, -1];
};

module.exports = twoSum;