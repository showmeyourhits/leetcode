const runningSumOf1DArray = require('../problems/running-sum-of-1d-array');

describe('running-sum-of-1d-array', () => {
    const cases = [
        {
            nums: [1,2,3,4],
            result: [1,3,6,10],
        },
        {
            nums: [1,1,1,1,1],
            result: [1,2,3,4,5],
        },
        {
            nums: [3,1,2,10,1],
            result: [3,4,6,16,17],
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(runningSumOf1DArray(nums)).toEqual(result)
        })
    })
});
