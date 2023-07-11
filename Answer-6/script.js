// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

const singleNumber = nums => {
  if (nums.length === 1) {
    return nums[0];
  }

  let result = 0;

  nums.forEach(element => {
    result = result ^ element;
  });

  return result;
};

console.log(singleNumber([2, 2, 1]));

// TC: O(n)
// SC: O(1)
