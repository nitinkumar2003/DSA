function FibonacciSum(num){
let a=0;
let b=1;
let sum=a;


for(let i=0;i<num;i++){
    let temp=a+b;
    a=b;
    b=temp;
    sum+=a;
}
return sum;
}


const result=FibonacciSum(5);

console.log(result)
