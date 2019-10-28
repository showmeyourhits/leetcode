var twoSum = function(nums, target) {
    const minusTarget = nums.map(n => n - target);
    let first = 0;

    while (first < nums.length) {
        if (minusTarget[first] < 0) {
            const abs = Math.abs(minusTarget[first]);
            let second = 0;
            
            while (second < nums.length) {
                if (second !== first && nums[second] === abs) {
                    return [first, second];
                }
                second++;
            }
        }
        first++;
    }

    return [-1,-1];
};

module.exports = twoSum;