const palindromes = function (string) {
    let isPalindrome = string.toLowerCase().replace(/[^a-z]/g, "")
    return (isPalindrome.split('').reverse().join('') === isPalindrome);

};

// Do not edit below this line
module.exports = palindromes;
