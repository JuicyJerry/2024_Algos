// SOLUTION 1
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    /*
        whiltespace를 기준으로 문자를 분리
        문자 요소별 접근하여 reverse
        새로운 변수 선언
        변수에 작업된 문자요소를 추가
        다만, 추가된 후 whiltespace 추가
     */

    let seperatedWords = s.split(' ');
    seperatedWords = seperatedWords.map(el => el.split('').reverse().join(''));
    seperatedWords = seperatedWords.join(' ');
    return seperatedWords;
};

// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(n)

// SOLUTION 2 : Traverse and Reverse each character one by one (직접 접근)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversedWord = '';
    let lastIdx = s.length - 1;
    let spaceIdx = 0;
    let arr = [];

    for (let i = 0; i <= lastIdx; i++) {
        if (s[i] === ' ' || i === lastIdx) {
            let temp = '';
            for (let j = i; j >= spaceIdx; j--) {
                temp += s[j];

            }
            arr.push(temp.trim());
            spaceIdx = i;
        }
    }

    reversedWord = arr.join(' ');
    return reversedWord;
};
// TIME COMPLEXITY : O(n^2)
// SPACE COMPLEXITY : O(n)

// SOLUTION 3: Two Pointers : 자바스크립트에서 문자열은 불변(immutable) -> 문자열 개별 문자를 인덱스로 직접 변경 불가
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let lastSpaceIndex = -1;
    let len = s.length;
        for (let strIndex = 0; strIndex <= len; strIndex++) {
            if (strIndex == len || s[strIndex] == ' ') {
                let startIndex = lastSpaceIndex + 1;
                let endIndex = strIndex - 1;
                while (startIndex < endIndex) {
                    let temp = s[startIndex];
                    s[startIndex] = s[endIndex];
                    s[endIndex] = temp;
                    startIndex++;
                    endIndex--;
                }
                lastSpaceIndex = strIndex;
            }
        }
    console.log(s);
    return s;
};

