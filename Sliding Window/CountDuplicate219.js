const containsNearbyDuplicate = (arr, k) => {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];

        if (map.has(val)) {
            const prevIndex = map.get(val);
            if (i - prevIndex <= k) {
                return true; 
            }
        }
        map.set(val, i);
    }

    return false;
}

const arr = [1, 2, 3, 1];
const k = 3;
console.log(containsNearbyDuplicate(arr, k)); 


// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false