const maximumSubarraySum = function(nums, k) {
    if (nums.length < k) return 0;

    let total = 0;
    let max = 0;
    let map = new Map(); // frequency store karega

    for (let i = 0; i < k; i++) {
        total += nums[i];
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    // @@ check dist
    if (map.size === k) {
        max = total;
    }

    
    
    for (let i = 1; i <= nums.length - k; i++) {

    //   @@ remove preivos elemebnt
        let prev = nums[i - 1];
        total -= prev;
        map.set(prev, map.get(prev) - 1);
        if (map.get(prev) === 0) {
            map.delete(prev);
        }

        // @@ add new element
        let next = nums[i + k - 1];
        total += next;
        map.set(next, (map.get(next) || 0) + 1);

    // check dist
        if (map.size === k) {
            max = Math.max(max, total);
        }
    }

    return max;
};

nums = [1,5,4,2,9,9,9];
k = 3;

console.log(maximumSubarraySum(nums,k));
