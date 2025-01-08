function RemoveDuplicate(arr){

    // method 1
    // let newArray=[]
    // for(let i=0;i<arr.length;i++){
    //     if(!newArray.includes(arr[i])){
    //         newArray.push(arr[i])
    //     }
    // }
    // return newArray;


    // method 2 optimize way two pointer technique
    let left=0;
    for(let i=1;i<arr.length;i++){
        if(arr[left] !=arr[i]){
            left ++ ;
            arr[left]=arr[i]
        }
    }
    return arr.slice(0,left+1)
}

let res=RemoveDuplicate([1,1,1,2,2,3,4,5,5,6,6,7,8])
console.log(res)