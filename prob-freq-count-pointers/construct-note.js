// **constructNote**

// Write a function called *** constructNote ***, which accepts two strings, a message and some letters.The function should return *** true *** if the message can be built with the letters that you are given; otherwise, it should return *** false ***.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// ** Constraints **:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

// **Solution**:
function constructNote(message, letters) {
    let messageFreq = {}
    let lettersFreq = {}
    for (let char of message) {
        char = char.toLowerCase()
        messageFreq[char] = ++messageFreq[char] || 1
    }
    for (let char of letters) {
        char = char.toLowerCase()
        lettersFreq[char] = ++lettersFreq[char] || 1
    }

    for (let key in messageFreq) {
        if (!lettersFreq[key] || lettersFreq[key] < messageFreq[key]) return false
    }
    return true
}
