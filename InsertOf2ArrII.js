// leet code 350

var intersect = function(nums1, nums2) {
    let res=[]
    let count=new Map()
    for(let item of nums1){
        count.set(item,(count.get(item) || 0)+1)
    }

    for(let item of nums2){
        if(count.get(item)){
            res.push(item)
            count.set(item,(count.get(item)-1))
        }
    }
    return res;
};
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.