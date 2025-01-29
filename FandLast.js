// Leetcode 34

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


var searchRange = function(nums, target) {
       if(nums.length==0){
        return [-1,-1]
    }
   
    function Find(type,nums,target){
         
    let left=0;
    let right=nums.length -1;
    let result=-1
    
       while(left <=right){
         let mid=Math.floor((right+left)/2);
         if(nums[mid]==target){
             result=mid;
             if(type=='F'){
                 right=mid-1
             }else{
                 left=mid+1
             }
            //  right=mid-1
         }else if(nums[mid] < target){
             left=mid+1
         }else{
             right=mid-1
         }
    } 
    return result;
         }
         
         
         return [Find('F',nums,target),Find('L',nums,target)]
    
};