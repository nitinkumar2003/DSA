// Remove duplicate from array


function removeDuplicate(arr) {
    // return [...new Set(arr)];
    return arr.reduce((dup, current) => {
        if (!dup.some(i => i === current)) {
            dup.push(current);
        }
        return dup; // Return the accumulator
    }, []);
}


const result=removeDuplicate([1, 2, 2, 3, 4, 4])
console.log(result)