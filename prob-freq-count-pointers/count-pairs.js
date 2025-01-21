
// ### ** countPairs **

// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter.You can assume that there will be no duplicate values in the array.

// ** Constraints **

// Time Complexity - O(N * log(N))

// ** or **

// Time Complexity - O(N)

function countPairs(arr, target) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j]
            if (sum === target) {
                count++
                j++
            }
        }
    }
    return count
}
