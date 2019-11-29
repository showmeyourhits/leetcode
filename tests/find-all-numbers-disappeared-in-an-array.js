const findAllNumbersDisappearedInAnArray = require('../problems/find-all-numbers-disappeared-in-an-array');

describe('find-all-numbers-disappeared-in-an-array', () => {
    const cases = [
        {
            nums: [1,2,4,2],
            result: [3],
        },
        {
            nums: [1,9,1,1,1,1,1,1,1],
            result: [2,3,4,5,6,7,8],
        },
        {
            nums: [2,2],
            result: [1],
        },
        {
            nums: [4,3,2,7,8,2,3,1],
            result: [5,6],
            // only: 1
        },
        {
            nums: [3,3,3,3,3],
            result: [1,2,4,5],
        },
        {
            nums: [5,3,1,3,5],
            result: [2,4],
        },
        {
            nums: [1,1,1],
            result: [2,3],
        },
        {
            nums: [10,2,5,10,9,1,1,4,3,7],
            result: [6,8],
        },
        {
            nums: [5,4,6,7,9,3,10,9,5,6],
            result: [1,2,8],
        },
        {
            nums: [],
            result: [],
        },
    ];

    cases.forEach(({result, nums, only}) => {
        (only ? it.only : it)(`${nums} -> ${result}`, () => {
            expect(findAllNumbersDisappearedInAnArray(nums)).toEqual(result)
        })
    })
});
