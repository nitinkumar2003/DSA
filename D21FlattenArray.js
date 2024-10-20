function flattenArray(arr){

    // type 1 
    // return arr.flat(Infinity)

    // type2

    let array=[]
    function flattenArray(arr2){
        for(let item of arr2){
            if(Array.isArray(item)){
                flattenArray(item)
            }else{
                result.push(item);
            }
        }
    }
    flattenArray(arr)
    return array;

}
const res=flattenArray([1, [2, [3, [4,[]]]]])
console.log(res)