// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));

// TC: O(n)
// SC: O(1)
