/**
 * @param {number[]} houses 
 */
var houseRobber = function(houses) {
    if (houses.length <= 2) return Math.max(...houses);

    const pairs = houses.reduce((meme, money, number) => {
        meme.push([number, money]);

        return meme;
    }, []).sort((a, b) => {
        const moneyDiff = b[1] - a[1];
        return moneyDiff || b[0] - a[0];
    })
    console.log(pairs);
};

module.exports = houseRobber;
