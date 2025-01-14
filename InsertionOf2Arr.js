// leetcode 349


var intersection = function(nums1, nums2) {
    let numA=new Set(nums1)
    let numB=new Set(nums2)
    console.log(numA,numB)
    let res=[]
    for(let item of numA){
        if(numB.has(item)){
            res.push(item)
        }
    }
    return res;
};

let a=[1,2,2,1]
let b=[2,2]
console.log(intersection(a,b),"aa")

//output