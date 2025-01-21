// Input:
nums = [2, 7, 11, 15], target = 123
// Output: [0, 1]
// Explanation: nums[0] + nums[1] == 9, we return [0, 1].

function FindPair(array,target){
    let left=0;
    let right=array.length;
    while(left < right){
        let sum=array[left]+array[right]
        if(sum==target){
            return [left,right]
        }else if(sum < target){
            left ++
        }else{
            right --
        }
    }
    return 'Not found'
}

console.log(FindPair(nums,target))