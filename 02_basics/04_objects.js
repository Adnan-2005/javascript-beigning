// const tinderUser = new Object() //singleton obj
const tinderUser = {} //non singleton obj
tinderUser.id = "addy@123"
tinderUser.name = "Adnan"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
 
const regular_user = {
    email: "adnan.ac.in",
    fullname: {
        userfullname: {
            firstname: "Adnan",
            lastname: "Ansari"
        }
    }
}
// console.log(regular_user.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "ad.ac.in"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor[2]

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

//JSON STRUCTURE 
// {
//     "coursename": "js in hindi",
//     "price": "999",
//     "instructor": "hitesh"
// }

// [
//     {},
//     {},
// ]

