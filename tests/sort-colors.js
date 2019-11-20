const sortColors = require('../problems/sort-colors');

describe('sort-colors', () => {
    const cases = [
        {
            nums: [2,1,2],
            result: [1,2,2],
        },
        {
            nums: [0,1,0],
            result: [0,0,1],
        },
        {
            nums: [1,2,0],
            result: [0,1,2],
        },
        {
            nums: [1,1,1,2,0,0,0],
            result: [0,0,0,1,1,1,2],
        },
        {
            nums: [0,0,0,2,1,1,1],
            result: [0,0,0,1,1,1,2],
        },
        {
            nums: [1,0,1,0,1,0],
            result: [0,0,0,1,1,1],
        },
        {
            nums: [0,0,2,1,2,0],
            result: [0,0,0,1,2,2],
        },
        {
            nums: [2,0,2,1,1,0],
            result: [0,0,1,1,2,2],
        },
        {
            nums: [1,0],
            result: [0,1],
        },
        {
            nums: [0],
            result: [0],
        },
        {
            nums: [],
            result: [],
        },
    ];

    cases.forEach(({nums, result}) => {
        it(`for [${nums}] result is: [${result}]`, () => {
            expect(sortColors(nums)).toEqual(result)
        })
    })
});
