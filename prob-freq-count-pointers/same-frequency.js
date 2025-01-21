// ### ** sameFrequency **

//     Write a function called *** sameFrequency ***.Given two positive integers, find out if the two numbers have the same frequency of digits.

// ** Constraints **

//     Time Complexity - O(N + M)

function sameFrequency(num1, num2) {
    str1 = num1.toString()
    str2 = num2.toString()
    if (str1.length !== str2.length) return false
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (let char of str1) {
        freqCounter1[char] = ++freqCounter1[char] || 1
    }
    for (let char of str2) {
        freqCounter2[char] = ++freqCounter2[char] || 1
    }
    for (let key in freqCounter1) {
        if (freqCounter1[key] !== freqCounter2[key]) return false
    }
    return true
}
