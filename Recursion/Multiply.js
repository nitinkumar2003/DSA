let inputArr=[1,2,3,4]

// let multiply=1;
// for(let item of inputArr){
//     multiply *=item
// }
// console.log(multiply)


function multiply(arr){
    if(arr.length==0){
        return 1;
    }
    return arr[arr.length-1]*multiply(arr.slice(0,arr.length-1))
}
console.log(multiply(inputArr))