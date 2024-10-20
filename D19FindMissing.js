function findMissingNumber(arr,n){
    const expectedSum=(n*(n+1))/2;
    const actualSum=arr.reduce((total,i)=>total+i,0)
    console.log(expectedSum)
    return expectedSum-actualSum;
}

const result=findMissingNumber([1, 2, 4, 5], 5)
console.log(result);