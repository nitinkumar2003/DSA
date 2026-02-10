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
