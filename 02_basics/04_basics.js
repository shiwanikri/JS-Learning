// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123bnv"
tinderUser.name = "Zuka"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shiwani",
            lastName: "Kumari"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: "1",
        email: "h@gmail.com"
    },
    {
        id: "1",
        email: "h@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "Shiwani"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// {
//     "courseName": "javascript",
//     "price": "999",
//     "courseInstructor": "Shiwani"
// }

[
    {},
    {},
    {}
]