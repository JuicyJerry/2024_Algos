// try 1
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        "(" :")",
        "{" :"}",
        "[" :"]",
    };
    
    // console.log(Object.values(obj))
    for (let i = 1; i < s.length; i+=2) {
        console.log(s[i - 1]);
        let t = s[i - 1];
        console.log(obj[t]);
        // console.log(Object.values(obj)[i]);
        if (obj[t] !== Object.values(obj)[i]) {
            return false;
        }
    }
    return true;
};