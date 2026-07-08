function middleOfLinkedList(head) {
    let slow = head;
    let fast=head;
    while(false !=null && fast.next !=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}


// @@ middle of array

function middleOfArray(arr){
let slow=0;
let fast=0;
while(fast < arr.length-1){
    slow++;
    fast+=2;
}
return slow
}