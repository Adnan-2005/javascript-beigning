const user = {
    username: "Adnan",
    price: "999",

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Ahmad"
// user.welcomeMessage()

// console.log(this);

// function a() {
//     let username = "Adnan"
//     console.log(this.username);
    
// }
// a()

// const chai = function() {
//     let username = "adnan"
//     console.log(this.username);
    
// }
// const chai = () => {
//     let username = "adnan"
//     console.log(this.username);
    
// }
// chai()

//ARROW FUNCTION

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

//IMPILCIT RETURN TYPE
// const addTwo = (num1 , num2) =>  num1+num2
const addTwo = (num1 , num2) =>  (num1+num2)
console.log(addTwo(3,4));