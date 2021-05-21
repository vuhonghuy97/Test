//ex A - 2
function merge2String(s1, s2) {
    var i,
        l = Math.min(s1.length, s2.length),
        temp = '';

    for( i = 0; i < l; i++) {
        temp += s1[i] + s2[i];
    }
    return temp + s1.slice(i) + s2.slice(i);
}

console.log(merge2String('abc', '123'));
console.log(merge2String('abcd', '0123')); 
console.log(merge2String('abcd', '123')); 
//ex A - 1
const findOppositeNumber  = (n,inputNumber) => {
    let result;
    if( n%2 !== 0) {
        alert("Số n sai")

    } else {
        if(inputNumber < n/2) {
            result = inputNumber + n/2;
        } else {
            result = inputNumber - n/2;
        }
    }
    return result;
}
// findOppositeNumber(10,6);
console.log(findOppositeNumber(10,2));
console.log(findOppositeNumber(10,6));