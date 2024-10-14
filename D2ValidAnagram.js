const isValidAnagram=(s,t)=>{
    if(s.length != t.length){
        return false;
    }

    const splits=s.split('').sort().join('')
    const splitt=s.split('').sort().join('')
    return splitt===splitt;
}


console.log( isValidAnagram(s = "anagram", t = "nagaram"))