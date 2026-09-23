function subarraySum(nums, k) {
    let sum = 0;
    let count = 0;

    let map = new Map();

    // Very important
    map.set(0, 1);

    for (let num of nums) {
        sum += num;

        // Check previous prefix sum
        let required = sum - k;

        if (map.has(required)) {
            count += map.get(required);
        }

        // Store current prefix sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
