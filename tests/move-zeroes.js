const moveZeroes = require('../problems/move-zeroes');

describe('move-zeroes', () => {
    const cases = [
        {
            nums: [0,1,0,3,12],
            result: [1,3,12,0,0],
        },
        {
            nums: [0,0,32],
            result: [32,0,0],
        },
        {
            nums: [0,0],
            result: [0,0],
        },
        {
            nums: [1,2,3],
            result: [1,2,3],
        },
        {
            nums: [],
            result: [],
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`[${nums}] > [${result}]`, () => {
            expect(moveZeroes(nums)).toEqual(result)
        })
    })
});
