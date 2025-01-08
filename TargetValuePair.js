function FindPair(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left < right){
        let sum=arr[left] + arr[right];
        if(sum==target){
            return [arr[left],arr[right]]
        }
        if(sum < target){
            left ++
        }
        if(sum > target){
            right --;
        }
    }
}

const res=FindPair([1,2,3,4,5,6,8,10],16);
console.log(res)