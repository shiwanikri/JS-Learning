console.log("2" > 1); //true             2 & 02 are converted to number
console.log("02" > 1); // true

console.log(null > 0); // false          equality check == and comparison >,<,>=,<= work differently
console.log(null == 0); // false         in comparison null is converted to 0
console.log(null >= 0); // true  

console.log(undefined > 0); // false          
console.log(undefined == 0); // false         
console.log(undefined >= 0); // false

// ===  strictly checks value and datatype both

console.log("2" === 2);