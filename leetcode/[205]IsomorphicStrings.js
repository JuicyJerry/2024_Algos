// SOLUTION 1 : SUCCESS
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapString1 = mapStrings(s);
    const mapString2 = mapStrings(t);
    const map1AsArray = Array.from(mapString1.entries()).flat(0);
    const map2AsArray = Array.from(mapString2.entries()).flat(0);
    if (map1AsArray.length !== map2AsArray.length) return false;

    for (let i = 0; i < map1AsArray.length; i ++) {
        if (map1AsArray[i][1].length === 1 && map1AsArray[i][1][0] !== map2AsArray[i][1][0]) return false;
        else {
            for (let j = 0; j < map1AsArray[i][1].length; j++) {
                if (map1AsArray[i][1][j] !== map2AsArray[i][1][j]) {
                    return false;
                }
            }
        }
    }

    return true;
};

var mapStrings = (str) => {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.get(str[i]).push(i);
        } else {
            map.set(str[i], [i]);
        }
    }

    return map;
}

// Time Complexity: O(n)
// Space Complexity: O(n)