// 424


function characterReplacement(s, k) {
let count={};
let maxCount=0;
let left=0;
let maxLength=0;

for(let right=0;right<s?.length;right++){
    const char=s[count];
    count[char]=(count[char]||0)+1;
    maxCount=Math.max(maxCount,count[char]);

    while(right-left+1-maxCount>k){
        const leftChar=s[left];
        count[leftChar]--;
        left++;
    }

    maxLength=Math.max(maxLength,right-left+1); 

}
return maxLength;
}
    


// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too