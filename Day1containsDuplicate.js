
// Leet code 217

let array=[1,2,3,1] //true 
let array2=[1,2,3,4] // false 
let array3=[1,1,1,3,3,4,3,2,4,2] //true

function isContainDuplicate(arr){

    const setVal=new Set();
    for(let num of arr){
        if(setVal.has(num)){
            return true;
        }
        setVal.add(num);
    }

    return false
}


console.log(isContainDuplicate(array))
console.log(isContainDuplicate(array2))
console.log(isContainDuplicate(array3))
