// longest subarray which has at most 2 distinct characters
function totalFruit(tree) {
    let left = 0;
    let maxLen = 0;
    let map = new Map();

    for (let right = 0; right < tree.length; right++) {
        let fruit = tree[right];

        // expand window
        map.set(fruit, (map.get(fruit) || 0) + 1);

        // shrink window if invalid
        while (map.size > 2) {
            let leftFruit = tree[left];
            map.set(leftFruit, map.get(leftFruit) - 1);

            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            }

            left++;
        }

        // update answer
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
s = [1, 2, 1], k = 2
totalFruit([1,2,1]) // 3
totalFruit([0,1,2,2]) // 3
totalFruit([1,2,3,2,2]) // 4