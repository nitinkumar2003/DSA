// Find the Sum of All Elements in an Array

function sumAllNumbers(arr){
    return arr.reduce((total,current,index)=>{
        return total+current;
    },0)
}

const result=arrayInsert([1, 2,8,7, 3,2, 5,7,3, 4]);
console.log(result)