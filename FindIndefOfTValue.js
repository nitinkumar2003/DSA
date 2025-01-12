// Input: 
// arr = [1, 3, 5, 7, 9, 11, 13, 15]
// target = 7

// Output: 
// Index of 7: 3


//  Binary Search
let arr = [1, 3, 5, 7, 9, 11, 13, 15]
let target = 1;


var search = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    let findValue
    while(left <=right){
        let midIndex=Math.floor((left+right)/2)
        if(nums[midIndex]==target){
            return midIndex;
        }
        if(nums[midIndex] < target){
            left=midIndex+1;
        }else{
            right=midIndex-1;
        }
    }
    return -1

};
console.log(findIndex(arr,target))