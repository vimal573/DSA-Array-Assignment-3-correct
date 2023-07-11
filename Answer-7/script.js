// Question 7
// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Example 1:
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

// Explanation: The ranges are:
// [2,2]
// [4,49]
// [51,74]
// [76,99]

const findMissingRanges = (nums, lower, upper) => {
  const result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    let curr = i < nums.length ? nums[i] : upper + 1;

    if (prev + 1 <= curr - 1) {
      result.push(
        prev + 1 === curr - 1 ? `${prev + 1}` : `${prev + 1}->${curr - 1}`
      );
    }
    prev = curr;
  }
  return result;
};

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
