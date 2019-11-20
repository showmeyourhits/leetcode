const twoSum = require('../problems/two_sum');

describe('two_sum', () => {
    const cases = [
        {
            nums: [2,7,11,15],
            target: 9,
            result: [0,1]
        },
        {
            nums: [0,4,3,0],
            target: 0,
            result: [0,3]
        },
        {
            nums: [-1,-2,-3,-4,-5],
            target: -8,
            result: [2, 4],
        },
        {
            nums: [0,-2,-3,5],
            target: 2,
            result: [2, 3],
        },
    ]

    cases.forEach(({nums, target, result}) => {
        test(`nums: [${nums}], target: ${target}`, () => {
            expect(twoSum(nums, target)).toEqual(result)
        })
    })
});
