// TRY1: FAIL
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let map = new Map();
    for (let el of strings) {
        if (map.has(el.length)) map.get(el.length).push(el);
        else map.set(el.length, [el]);
    }
    
    console.log("map ---> ", map);
    console.log("map.values() ---> ", map.values());
    let newMap = Array.from(map.values());
    return newMap;
};

// TRY2: SUCCESS
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let map = new Map();

    for (let el of strings) {
        let key = '';

        for (let i = 1; i < el.length; i++) {
            let diff = (el[i].charCodeAt() - el[i - 1].charCodeAt() + 26) % 26;
            key += diff + ', ';
        }

        if (map.has(key)) map.get(key).push(el);
        else map.set(key, [el]);

    }
    
    return Array.from(map.values());
};

// Time Complexity: O(K * N)
// Space Complexity: O(N)