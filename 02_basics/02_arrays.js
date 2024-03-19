const marvel_horoes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_horoes.push(dc_heroes)
// console.log(marvel_horoes);
// console.log(marvel_horoes[3][1]);

const allHeroes = marvel_horoes.concat(dc_heroes)
console.log(allHeroes);

const all_new_heroes = [...marvel_horoes, ...dc_heroes]
console.log(all_new_heroes);

const anotherArray = [1,2,3, [4,5,6], 7,8 , [9,10]]
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);

console.log(Array.isArray("Shiwani"));
console.log(Array.from("Shiwani"));

console.log(Array.from({name: "Shiwani"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));