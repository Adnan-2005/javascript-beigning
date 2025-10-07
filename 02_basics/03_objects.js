// singleton

// object literals 

const mySym = Symbol("addy")
const User = {
    name: "Adnan",
    "full name": "Adnan Ansari",
    [mySym]: "addy",
    age: 20,
    location: "Lucknow",
    email: "adnan@mail.com",
    isLoggedIn: "flase",
    LastLoginDays: ["Monday", "Tuesday",]
}
// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[mySym]);
// console.log(User);

User.greeting = function() {
    console.log("Hello User");
    
}
User.greetingTwo = function() {
    console.log(`Hello User , ${this.name}`);
    
}
console.log(User.greetingTwo());

// console.log(User.greeting());






