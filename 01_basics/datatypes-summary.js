// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
let userCity = "Indore"

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 288595048583048530845n

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Shiwi",
    age: 22
}

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof userCity);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "shiwani.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sk@google.com"