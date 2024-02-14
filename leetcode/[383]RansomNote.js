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
