function reverseWordsInString(str){
    
    // return  str.split(' ').map((i)=>{
    //     return i.split('').reverse().join('')
    // }).reverse().join(' ')
    
    let reverseStr=''
    let splitStr=str.split(' ').reverse();
    for(let i=0;i<splitStr.length;i++){
        reverseStr+= ' '+ splitStr[i].split('').reverse().join('')
    }
    return reverseStr;
    
}
const result=reverseWordsInString('Hello World I am Nitin')
console.log('result',result)