// SOLUTION 1
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealthArr = [];
    
    accounts.forEach((el, idx) => {
        const sum = el.reduce((acc, cur) => acc + cur, 0); 
        wealthArr.push(sum);   
    })

    return Math.max(...wealthArr);
};
