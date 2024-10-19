function isMaxNo(arr){
    // return Math.max(...arr)
    let maxNo=arr[0]
    for(let item of arr){
        if(maxNo < item){
            maxNo=item;
        }
    }
    return maxNo;
    
}

const result=isMaxNo([1,5,6,9,1,2,54,96,78]);
console.log(result);