
function firstNonRepeatingChar(str) {
    console.log(str,str.length)
    for(let i=0;i<str.length;i++){
        // console.log(str[i],str.indexOf(str[i]),str.lastIndexOf(str[i]))
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i]
        }
    }
    return null;
    }
    
    
    const result=firstNonRepeatingChar('swiss')
    console.log(result) //'w'