/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    if (!strs.length) return prefix
    
    const [firstWord, ...rest] = strs
    
    for (let i = 0; i < firstWord.length; i++) {
        for (const str of rest) {
            if (str[i] !== firstWord[i]) return prefix
        }
        prefix += firstWord[i]
    }
    
    return prefix
};