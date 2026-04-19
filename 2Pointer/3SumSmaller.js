
function countTriplets(arr,sum){
     arr.sort((a, b) => a - b); 
    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let currSum = arr[i] + arr[left] + arr[right];

            if (currSum < sum) {
                count += (right - left);
                left++;
            } else {
                right--;
            }
        }
    }

    return count;

}
arr = [-2, 0, 1, 3]
sum = 2
console.log(countTriplets(arr,sum))