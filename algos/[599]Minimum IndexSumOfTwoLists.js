// TRY1: SUCCESS
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < list1.length; i++) {
        map1.set(list1[i], i);
    }

    for (let i = 0; i < list2.length; i++) {
        map2.set(list2[i], i);
    }


    let mapString = new Map();
    for (const [key, value] of map1) {
        if (map2.has(key)) {
            mapString.set(key, value + map2.get(key));
        }
    }

    mapString = Array.from(mapString).sort((a, b) => a[1] - b[1]);

    let result = [];
    let leastIndex = mapString[0][1];
    for (let el of mapString) {
        if (el[1] === leastIndex) result.push(el[0]);
    }
    return result;
};

// Time Compexity: O(N log N)
// Space Compexity: O(N + M + K)