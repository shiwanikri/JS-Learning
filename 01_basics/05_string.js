const name = "Shiwani"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('sking-hc-com')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  sking   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//sking%02.com"
console.log(url.replace('%02' , '-'));

console.log(url.includes('sking'));
console.log(url.includes('jaming'));

console.log(gameName.split('-'));