let array1=[1,3,6]
let array2=[2,4,7,8]

function MergeTwoSortedArray(a1,a2){
let i=0;
let j=0;
let result=[];
while(i<a1.length && j<a2.length){
    if(a1[i] < a2[j]){
        result.push(a1[i]);
        i++;
    }else{
        result.push(a2[j])
        j++;
    }
}

while(i<a1.length){
    result.push(a1[i]);
    i++;
}

while(j<a2.length){
    result.push(a2[j]);
    j++
}
console.log(result,'result');


}

MergeTwoSortedArray(array1,array2)