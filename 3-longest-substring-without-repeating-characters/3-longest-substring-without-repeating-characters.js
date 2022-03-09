/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestStr = ''
    let currentStr = ''
    
    for (let char of s) {
        // get index to slice duplicated character in currentStr
        const curIdx = currentStr.indexOf(char)
        
        // If there's exist, remove all chars and only put current char. = current
        if (curIdx > -1) {
            longestStr = currentStr.length > longestStr.length ? currentStr : longestStr
            currentStr = currentStr.slice(curIdx + 1) + char
        } else {
            currentStr += char
            longestStr = currentStr.length > longestStr.length ? currentStr : longestStr
        }
    }
    return longestStr.length
};
