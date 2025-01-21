// ### ** separatePositive **

// Write a function called *** separatePositive *** which accepts an array of non - zero integers.Separate the positive integers to the left and the negative integers to the right.The positive numbers and negative numbers need not be in sorted order.The problem should be done in place(in other words, do not build a copy of the input array).

// ** Constraints **

// Time Complexity: O(N)


function separatePositive() {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] > 0) {
            left++
        } else if (arr[right] < 0) {
            right--
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    return arr
}
