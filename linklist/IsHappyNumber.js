var isHappy = function(n) {
    function nextNumber(num) {
        let sum = 0;
        for (let digit of num.toString()) {
        digit = Number(digit);
        sum += digit * digit;
    }
        return sum;
    }

    let slow = n;
    let fast = n;

    while(fast !=1){
        slow=nextNum(slow);
        fast = nextNum(nextNum(fast)); 
        if(slow ==fast){
            return slow==1
        }
    
}

    return true;
}