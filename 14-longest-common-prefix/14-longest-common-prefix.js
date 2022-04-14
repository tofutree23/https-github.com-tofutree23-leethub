/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    
    const firstWord = strs[0]
    
    for (let i = 0; i < firstWord.length; i++) {
        for (const str of strs) {
            if (str[i] !== firstWord[i]) {
                return str.slice(0, i)
            }
        }
    }

    return firstWord
};