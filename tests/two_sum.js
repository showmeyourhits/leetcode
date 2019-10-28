const twoSum = require('../two_sum');

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
        }
    ]

    cases.forEach(({nums, target, result}) => {
        test(`nums: [${nums}], target: ${9}`, () => {
            expect(twoSum(nums, target)).toEqual(result)
        })
    })
});
