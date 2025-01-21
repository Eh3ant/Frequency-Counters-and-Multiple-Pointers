// add whatever parameters you deem necessary

// ### ** averagePair **

//     Write a function called *** averagePair ***.Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.There may be more than one pair that matches the average target.

// ** Constraints **:

// Time Complexity: O(N)

function averagePair(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const average = (arr[left] + arr[right]) / 2
        if (average === target) return true
        if (average > target) {
            right--;
        } else {
            left++
        }

    }
    return false
}
