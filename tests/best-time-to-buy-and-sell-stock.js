const bestTimeToBuyAndSellStock = require('../problems/best-time-to-buy-and-sell-stock');

describe('best-time-to-buy-and-sell-stock', () => {
    const cases = [
        {
            nums: [7,1,5,3,6,4], 
            result: 5,
        },
        {
            nums: [7,6,4,3,1],
            result: 0,
        },
        {
            nums: [1,1],
            result: 0,
        },
        {
            nums: [1,8],
            result: 7,
        },
        {
            nums: [],
            result: 0,
        },
        {
            nums: [2,10,1,6,7],
            result: 8,
        },
        {
            nums: [4,3,2,1,9,10,1,8],
            result: 9,
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(bestTimeToBuyAndSellStock(nums)).toEqual(result)
        })
    })
});
