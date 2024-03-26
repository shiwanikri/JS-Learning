// for of
myArr = [1,2,3,4,5]
for (const val of myArr) {
    // console.log(val);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(greet);
}

// ++++++++++++++++++  Map    +++++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}