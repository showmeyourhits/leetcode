const containerWithMostWater = require('../problems/container-with-most-water');

describe('container-with-most-water', () => {
    const cases = [
        {
            nums: [1,8,6,2,5,4,8,3,7],
            result: 49,
        },
        {
            nums: [3,9,3,4,7,2,12,6],
            result: 45,
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(containerWithMostWater(nums)).toEqual(result)
        })
    })
});
