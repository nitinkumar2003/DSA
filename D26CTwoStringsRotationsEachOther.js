// Check if Two Strings Are Rotations of Each Other
function areRotations(s1,s2){
    const add=s1+s1
    console.log(add,add.includes(s2))
}
areRotations('abcde', 'cdeab');
areRotations('abcde', 'abced');