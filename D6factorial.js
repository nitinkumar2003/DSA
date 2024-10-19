function factorial(num){
    if(num===0 || num===1) return 1;
    return num * factorial(num-1);

    // let factorialVal=1;
    // for(let i=0;i<num;i++){
    //     factorialVal=factorialVal * (i+1)
    // }
    // return factorialVal;
}


let result=factorial(30);
console.log("result",result)