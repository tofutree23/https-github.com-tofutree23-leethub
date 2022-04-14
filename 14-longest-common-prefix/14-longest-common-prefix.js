/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    if (strs.length === 0) return prefix
    
    const firstWord = strs[0]
    
    for (let i = 0; i < firstWord.length; i++) {
        for (const str of strs) {
            if (str[i] !== firstWord[i]) return prefix
        }
        prefix += firstWord[i]
    }
    
    return prefix
};