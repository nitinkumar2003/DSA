
// 35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left <= right){
        let midIndex=Math.floor((left+right)/2)
        if(nums[midIndex]==target){
            return midIndex
        }else if(nums[midIndex] > target){
            right=midIndex-1
        }else{
            left = midIndex+1
        }
    }
    return left;
};