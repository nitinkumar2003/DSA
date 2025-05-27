function rangeOfNumbers(start,end){
    if(end <start){
        return []
    }else{
        let numbers=rangeOfNumbers(start,end-1)
        numbers.push(end)
        return numbers;
    }

}

console.log(rangeOfNumbers(0,5))