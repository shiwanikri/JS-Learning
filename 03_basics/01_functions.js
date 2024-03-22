
function myFunction(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("W");
    console.log("A");
    console.log("N");
    console.log("I");
}

// console.log(myFunction());

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
        let result = number1 + number2
        return result
    }

const result = addTwoNumbers(3,5)
// console.log("Result:", result);

function userLoggin(user){
    return `${user} logged in`
}

// console.log(userLoggin('Shiwanni'));

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500));

// const user = {
//     username: "Shiwani",
//     price: 199 
// }

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 199
})

const newArray = [100,200,300,400]

function returnSecondValue(getArray){
  return(getArray[1])
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300,400]));