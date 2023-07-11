// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

const fourSum = (nums, target) => {
  // Resultant list
  const quadruplets = [];
  // Base condition
  if (nums == undefined || nums.length < 4) {
    return quadruplets;
  }
  // Sort the array
  nums.sort((a, b) => a - b);
  // Length of the array
  const n = nums.length;
  // Loop for each element of the array
  for (let i = 0; i < n - 3; i++) {
    // Check for skipping duplicates
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    // Reducing to three sum problem
    for (let j = i + 1; j < n - 2; j++) {
      // Check for skipping duplicates
      if (j != i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      // Left and right pointers
      let k = j + 1;
      let l = n - 1;
      // Reducing to two sum problem
      while (k < l) {
        const currentSum = nums[i] + nums[j] + nums[k] + nums[l];
        if (currentSum < target) {
          k++;
        } else if (currentSum > target) {
          l--;
        } else {
          quadruplets.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          // Check for skipping duplicates
          while (k < l && nums[k] == nums[k - 1]) {
            k++;
          }
          while (k < l && nums[l] == nums[l + 1]) {
            l--;
          }
        }
      }
    }
  }
  return quadruplets;
};

console.log(fourSum([1, 0, -1, 0, -2, 2]), 0);

// TC: O(N^3)
// SC: O(1)