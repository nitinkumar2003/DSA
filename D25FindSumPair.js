function findPairs(arr,target){
let pairs=[];
let seen=new Set();
for(let num of arr){
    let comp=target-num;
    if(seen.has(comp)){
        pairs.push([comp,num])
    }
    seen.add(num)
}
}
findPairs([1, 2, 3, 4, 5, 6], 7);
// console.log(findPairs([1, 2, 3, 4, 5, 6], 7));  // [[6, 1], [5, 2], [4, 3]]
