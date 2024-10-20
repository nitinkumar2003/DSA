// . Find the Longest Word in a String
function findLongestWord(str){
    let strSplit=str.split(' ');
    let longestWord='';
    for(let word of strSplit){
        if(word.length>longestWord.length){
           longestWord=word 
        }
    }
    return longestWord;
}

const result=findLongestWord('The aaaaaaaaaaaaaaa quick brown fox jumped over the lazy dog')
console.log(result)