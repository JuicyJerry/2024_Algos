// TRY1 : SUCCESS
/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.dictionary = dictionary;
    this.newDictionary = new Map();
    this.dictionary.map((el) => {
        let dicAbbr = `${el.slice(0, 1)}${el.slice(1, -1).length}${el.slice(-1)}`;
        if (this.newDictionary.has(dicAbbr)) this.newDictionary.get(dicAbbr).push(el);
        else this.newDictionary.set(dicAbbr, [el]);
    })
};

/** 
 * @param {string} word
 * @return {boolean}
     둘 중 하나만 만족해도 참
    1. 약어끼리 같은 단어가 사전에 없음
    2. 단어끼리 약어끼리 같은 단어가 있음
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let abbr = `${word.slice(0, 1)}${word.slice(1, -1).length}${word.slice(-1)}`;
    if (!this.newDictionary.has(abbr)) return true;
    if (this.newDictionary.get(abbr)?.indexOf(word) > -1) {
        if (this.newDictionary.get(abbr).length > 1 && (this.newDictionary.get(abbr)[0] !== this.newDictionary.get(abbr)[1])) return false;
        else return true;
    }

    return false;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */

// TRY2: Optimization
/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.newDictionary = new Map();
    dictionary.forEach((el) => {
        let dicAbbr = `${el.slice(0, 1)}${el.slice(1, -1).length}${el.slice(-1)}`;
        if (!this.newDictionary.has(dicAbbr)) this.newDictionary.set(dicAbbr, new Set());
        this.newDictionary.get(dicAbbr).add(el);
    })
};

/** 
 * @param {string} word
 * @return {boolean}
     둘 중 하나만 만족해도 참
    1. 약어끼리 같은 단어가 사전에 없음
    2. 단어끼리 약어끼리 같은 단어가 있음
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let abbr = `${word.slice(0, 1)}${word.slice(1, -1).length}${word.slice(-1)}`;
    const wordsWithSameAbbr = this.newDictionary.get(abbr);
    return !wordsWithSameAbbr || (wordsWithSameAbbr.size === 1 && wordsWithSameAbbr.has(word));
};
