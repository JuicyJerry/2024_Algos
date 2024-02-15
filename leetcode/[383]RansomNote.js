// SOLUTION 1
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let noteLetters = ransomNote.split('');
    let magazineLetters = magazine.split('');
    
    if (noteLetters.length > magazineLetters.length) return false;
    
    for (let i = 0; i < magazineLetters.length; i++) {
        let targetIndex = noteLetters.indexOf(magazineLetters[i]);
        
        if (targetIndex > -1) {
            noteLetters.splice(targetIndex, 1);
        }
    }

    if (noteLetters.length === 0) return true;
    return false;   
};

// Time Complexity: O(NM)
// Space Complexity: O(M)

// SOLUTION 2
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineLetters = {};

    for (let el of magazine) {
        if (magazineLetters[el] >= 1) {
            magazineLetters[el]++;
        } else {
            magazineLetters[el] = 1;
        }
    }

    for (let el of ransomNote) {
        if (magazineLetters[el] >= 1) {
            magazineLetters[el]--;
        } else {
            return false;
        }
    }
    return true;
};

// SOLUTION 3
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let el of magazine) {
        ransomNote = ransomNote.replace(el, "");
        if (ransomNote.length === 0) return true;
    }
    return false;
};

// SOLUTION 4
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let el of magazine) {
        ransomNote = ransomNote.replace(el, "");
    }
    if (!!ransomNote) return false;
    return true;
};

// SOLUTION 5
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i=0;i<ransomNote.length;i++){
        if(!magazine.includes(ransomNote[i])) return false;
        magazine = magazine.replace(ransomNote[i],"");
    }
    return true;
};