const singleNumber = require('../single-number');

describe('single-number', () => {
    const cases = [
        {
            nums: [2,2,1],
            target: 1,
        },
        {
            nums: [-1,-2,-1],
            target: -2
        },
        {
            nums: [4,1,2,1,2],
            target: 4
        },
    ];

    cases.forEach(({nums, target}) => {
        it(`nums: [${nums}]`, () => {
            expect(singleNumber(nums)).toEqual(target)
        })
    })
});
