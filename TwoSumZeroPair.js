function ZeroSum(array){
    let sortedArr=array.sort((a,b)=>a-b);
    let result=[];
    let left=0;
    let right=sortedArr.length-1;
    console.log(sortedArr);
    
    while(left < right){
        let sum=sortedArr[left] + sortedArr[right];
        if(sum==0){
            result.push([sortedArr[left], sortedArr[right]]);
            
            left ++;
            right--;
        }else if(sum<0){
            left++;
        }else{
            right --;
        }
    }
    console.log("result",result)
    }
    
    const nums = [-2,-1, 0, 1,1, 2,-3,-3, 3,-1, -4];
    console.log(ZeroSum(nums));
    