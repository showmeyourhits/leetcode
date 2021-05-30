import { laundry } from '../problems/laundry';

describe('laundry', () => {
    const cases = [
        {
            ll: {
                washers: 2,
                people: [1,2,3,1],
            },
            result: 4,
        },
        {
            ll: {
                washers: 1,
                people: [1,2,3],
            },
            result: 6,
        },
        {
            ll: {
                washers: 3,
                people: [2,4,2,4,1,3,4],
            },
            result: 8,
        },
    ];

    cases.forEach(({result, ll}) => {
        it(`${JSON.stringify(ll)} -> ${result}`, () => {
            expect(laundry(ll)).toEqual(result)
        })
    })
});
