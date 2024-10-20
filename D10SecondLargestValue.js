function secondLargest(){

    // type 1 sorted array
    const sortedArr=arr.sort((a,b)=>b-a);
    return sortedArr[1];

    // type 2 without sort array with predife method

    
            // const argArr=arr;
            // const fLVal=Math.max(...argArr);
            // const findIndex=argArr.indexOf(Math.max(...argArr));
            // argArr.splice(findIndex,1)
            // const sLVal=Math.max(...argArr);
            // console.log(fLVal,findIndex,sLVal)
            // return sLVal;

    // type 3  without predefine mehtod

        // let fVal=arr[0]
        // let sVal=arr[0];
        
        // for(let i=0;i < arr.length;i++){
        //     if(fVal< arr[i]){
        //         sVal=fVal;
        //         fVal=arr[i];
        //     }
        // }
        // console.log(sVal,fVal)
        // return sVal;


}



const result=secondLargest([10, 5, 20, 30,21,55,56,88,99, 7]);
console.log(result)
