var pivotIndex = function(nums) {
    let n = nums.length;
    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    for (let i = 0; i < n; i++) {
        let leftSum = prefix[i];
        let rightSum = prefix[n] - prefix[i + 1];

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
};
