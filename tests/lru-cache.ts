import { LRUCache } from '../problems/lru-cache';


describe('lru-cache', () => {
    const inputCommand = ["put", "put", "get", "put", "get", "put", "get", "get", "get"];
    const inputArgs  =   [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];

    const values = [undefined, undefined, 1, undefined, -1, undefined, -1, 3, 4];
    
    describe('size 2', () => {
        const cache = new LRUCache(2);

        inputCommand.forEach((_, i) => {
            it(`${inputCommand[i]}(${inputArgs[i]}) => ${values[i]}`, () => {
                // console.log({size: cache.cache.size})
                expect(cache[inputCommand[i]](...inputArgs[i])).toEqual(values[i]);
            })
        })
    })

});
