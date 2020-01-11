const houseRobber = require('../problems/house-robber');

describe('house-robber', () => {
    const cases = [
        {
            nums: [1,2,3,1],
            result: 4,
        },
        {
            nums: [1,1,1,1],
            result: 2,
        },
        {
            nums: [2,7,9,3,1],
            result: 12,
        },
        {
            nums: [3,5,3],
            result: 6,
        },
        {
            nums: [3,4],
            result: 4,
        },
        {
            nums: [5],
            result: 5,
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`[${nums}] -> ${result}`, () => {
            expect(houseRobber(nums)).toEqual(result)
        })
    })
});
