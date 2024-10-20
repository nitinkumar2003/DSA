function firstRepeatingChar(str){
    let charSet=new Set();
    for(let char of str){
        if(charSet.has(char))return char;
        charSet.add(char);
    }
    return null;
}

const res=firstRepeatingChar('Naitin');
console.log('res',res)