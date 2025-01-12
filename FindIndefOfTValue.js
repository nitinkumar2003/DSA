// Input: 
// arr = [1, 3, 5, 7, 9, 11, 13, 15]
// target = 7

// Output: 
// Index of 7: 3


//  Binary Search
let arr = [1, 3, 5, 7, 9, 11, 13, 15]
let target = 1;


const findIndex=(arr,target)=>{
    let left=0;
    let right=arr.length-1;

while(left < right){
    let midValue=Math.floor((left+right)/2)
    
    if(arr[midValue] == target){
        return midValue;
    }
    if(arr[midValue] < target){
        left =midValue;
    }else{
        right --
    }
}
}

console.log(findIndex(arr,target))