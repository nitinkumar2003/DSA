function reverseString(str){
    if(!str.trim()){
        return "Invalid String"
    }
    if(str.length==1){
        return str;
    }
    // return str.split('').reverse().join('')
    let reverseString=''
    for(let i=str.length-1;i>=0;i--){
        console.log(str[i])
        reverseString+=str[i]
    }
    return {reverseString}
}

let result=reverseString('ABCD');
console.log('result',result)
