const dailyTemperatures = require('../problems/daily-temperatures');

describe('daily-temperatures', () => {
    const cases = [
        {
            nums: [73, 74, 75, 71, 69, 72, 76, 73],
            result: [1, 1, 4, 2, 1, 1, 0, 0],
        },
        {
            nums: [73, 73],
            result: [0, 0],
        },
        {
            nums: [73],
            result: [0],
        },
        {
            nums: [],
            result: [],
        },
        {
            nums: [76, 75, 74, 73],
            result: [0, 0, 0, 0],
        },
        {
            nums: [69, 68, 67, 73],
            result: [3, 2, 1, 0],
        },
    ];

    cases.forEach(({result, nums, only}) => {
        const foo = only ? it.only : it;
        foo(`${nums} -> ${result}`, () => {
            expect(dailyTemperatures(nums)).toEqual(result)
        })
    })
});
