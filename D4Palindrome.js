function Palindrome(str){
    if(!str || !str.trim()) return ;
    let reserveStr=str.split('').reverse().join('');
    return reserveStr===str;
}

const result=Palindrome('nitin');
console.log(result);