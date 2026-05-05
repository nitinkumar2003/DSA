function longestSubstringKDistinct(s, k) {
    let left = 0;
    let maxLen = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // expand window
        map.set(char, (map.get(char) || 0) + 1);

        // shrink window if invalid
        while (map.size > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);

            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }

            left++;
        }

        // update answer
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
s = "aaabbcc", k = 2