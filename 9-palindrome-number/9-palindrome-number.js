/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed = `${x}`.split('').reverse().join('')
    
    return reversed === `${x}`
};