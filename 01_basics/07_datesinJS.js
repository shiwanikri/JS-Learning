// +++++++++++++++++++++    Maths  +++++++++++++++++++++++++++

const myDate = new Date()
// console.log(myDate);                                 //  2024-03-18T17:47:35.126Z           
// console.log(myDate.toString());                      //  Mon Mar 18 2024 17:47:35 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());                  //  Mon Mar 18 2024
// console.log(myDate.toISOString());                   //  2024-03-18T17:47:35.126Z
// console.log(myDate.toJSON());                        //  2024-03-18T17:47:35.126Z
// console.log(myDate.toLocaleDateString());            //  3/18/2024
// console.log(myDate.toLocaleString());                //  3/18/2024, 5:47:35 PM
// console.log(myDate.toLocaleTimeString());            //  5:47:35 PM
// console.log(myDate.toTimeString());                  //  17:47:35 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date("2023-01-23")
let myCreateDate = new Date("3-01-2023")


// console.log(myCreateDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreateDate.getTime());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);

