// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

const threeSumClosest = (nums, target) => {
  let len = nums.length;
  let sum = 0;
  if (len === 0) return 0;
  if (len <= 3) {
    for (let i = 0; i < len; i++) {
      sum += nums[i];
    }
    return sum;
  }
  nums.sort(function (a, b) {
    return a - b;
  });

  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1, k = len - 1; j < len - 1, j < k; ) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        if (
          (closest < sum && sum < target) ||
          Math.abs(target - sum) < Math.abs(target - closest)
        ) {
          closest = sum;
        }
        j++;
      } else if (sum > target) {
        if (
          (closest > sum && sum > target) ||
          Math.abs(target - sum) < Math.abs(target - closest)
        ) {
          closest = sum;
        }
        k--; //to reduce sum decrease tail
      }
    }
  }
  return closest;
};

threeSumClosest([-1, 2, 1, -4], 1);

// TC: O(n^2)
// SC: O(1)
