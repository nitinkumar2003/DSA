nums = [5, 7, 7, 8, 8, 10], target = 8
function FindFirst(array,target){
    let left =0;
    let right=array.length-1;
    let result=-1;
    
    while(left <= right){
        let mid=Math.floor((right+left)/2);
        if(array[mid]==target){
            result=mid;
            right =mid-1;
        }else if(array[mid] < target){
            left = mid+1    
        }else{
            right = mid-1
        }
    }
    return result;
}

console.log("result:-",FindFirst(nums,target)) 