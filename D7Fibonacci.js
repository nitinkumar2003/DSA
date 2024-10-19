function Fibonacci(num){
    if(num >=1){
        return num;
    }

    return Fibonacci(num-1) + Fibonacci(num-2)

}

let result=Fibonacci(8)
console.log("result",result)