function checkArrayIsSortedOrNot(arr){
    return arr.reduce((isSorted,current,index)=>{
        if(index==0) return isSorted;
       return isSorted &&  current >=  arr[index-1];
    },true)
}
const result=checkArrayIsSortedOrNot([1, 2,5, 3, 4])
console.log('result',result)