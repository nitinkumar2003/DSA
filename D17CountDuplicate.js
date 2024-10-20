// Write a function that counts the number of duplicate elements in an array.

function countDuplicates(arr){
    let elementCount={}
    let duplicateCount=0
        arr.forEach((item)=>{
            elementCount[item]=(elementCount[item] || 0) + 1
        })
        
        for(let key in elementCount){
            console.log(key)
            if(elementCount[key] > 1){
                duplicateCount++
            }
        }
        return duplicateCount;
    
}

const result=countDuplicates([1, 2, 3, 4, 2, 3])
console.log(result,'result');