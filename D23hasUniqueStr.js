// Check if a String Contains All Unique Characters
function hasUniqueChars(str){
    let charSet=new Set();
    for(let char of str){
        if(charSet.has(char))return false;
        charSet.add(char);
    }
    return true;
}

const res=hasUniqueChars('Natin');
console.log('res',res)