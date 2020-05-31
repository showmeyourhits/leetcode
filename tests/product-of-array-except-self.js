const productOfArrayExceptSelf = require('../problems/product-of-array-except-self');

xdescribe('product-of-array-except-self', () => {
    const cases = [
        {
            nums: [1,2,3,4],
            result: [24,12,8,6],
        },
        {
            nums: [3,4],
            result: [4,3],
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(productOfArrayExceptSelf(nums)).toEqual(result)
        })
    })
});
