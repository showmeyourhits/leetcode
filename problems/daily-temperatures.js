/**
 * 
 * @param {number[]} list 
 */
var dailyTemperatures = function(list) {
    const tMap = new Map();
    const temps = [];

    list.forEach((number, index) => {
        const value = tMap.get(number);
        
        if (value) {
            value.push(index);
        } else {
            temps.push(number);
            tMap.set(number, [index]);
        }
    });

    const visitedIdxs = [];

    temps.sort((a, b) => b - a).forEach((temp) => {
        const idxs = tMap.get(temp);

        idxs.forEach(idx => {
            const  minIndex = Math.min(...visitedIdxs.filter((visitedIdx) => visitedIdx > idx));

            list[idx] = minIndex === Infinity ? 0 : (minIndex - idx);
        });

        visitedIdxs.push(...idxs);
    })

    return list;
};

module.exports = dailyTemperatures;
