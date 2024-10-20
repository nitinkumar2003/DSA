function MajorityElement(arr){
    let count={}
    arr.forEach((i)=>{
        count[i]=(count[i]||0)+1
    })
    let majority=0;
    for(let key in arr){
        if(count[key]>majority){
            majority=key;
        }
    }
    console.log(count)
    return majority;
       
   }
   
   const res=MajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]);
   console.log(res);