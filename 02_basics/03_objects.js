// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Shiwani",
    "Full Name": "Shiwani Kumari",
    [mySym]: "myKey1",
    age: 21,
    location: "Indore",
    email: "sk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sking@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "king@yahoo.coooom"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.email}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());