const user = {
    username: "Hitesh",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
user.username = "Sam"
// user.welcomeMessage()
console.log(this);

// function Chai(){
//     const username = "Shiwani"
//     console.log(this.username);
// }

// const Chai = function(){
//     const username = "Shiwani"
//     console.log(this.username);
// }

const Chai = () => {
        const username = "Shiwani"
        console.log(this);
    }

// Chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1+num2

const addTwo = (num1, num2) => ({username: "Shiwani"})
console.log(addTwo(3,4));

