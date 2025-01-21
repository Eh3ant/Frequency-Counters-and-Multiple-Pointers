
// ### ** countPairs **

// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter.You can assume that there will be no duplicate values in the array.

// ** Constraints **

// Time Complexity - O(N * log(N))

// ** or **



// function countPairs(arr, target) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const sum = arr[i] + arr[j]
//             if (sum === target) {
//                 count++
//                 j++
//             }
//         }
//     }
//     return count
// }

// time complexity - O(N^2)

function countUnSortedPairs(arr, target) {
    let count = 0
    let seen = new Set()
    for (let num of arr) {
        let diff = target - num
        if (seen.has(diff)) {
            count++
            seen.delete(diff)
        } else {
            seen.add(num)
        }
    }
    return count
}

// Time Complexity - O(N)

console.log(countUnSortedPairs([1, 2, 3, 4, 5, 6, 7], 7)) // 3


function countUnSortedPairs(arr, target) {
    arr.sort((a, b) => a - b); // Sort the array
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            count++;
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return count;
}

// Time Complexity - O(N log(N))

console.log(countUnSortedPairs([1, 2, 3, 4, 5, 6, 7], 7)) // 3