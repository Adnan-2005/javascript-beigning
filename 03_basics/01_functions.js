function sayName(){
    console.log("A");
    console.log("D");
    console.log("N");
    console.log("A");
    console.log("N");
}
// sayName()

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }

function LoginUserMessage(username = "addy") {
    if(!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in `
}
// console.log(LoginUserMessage('Adnan'))
console.log(LoginUserMessage("Adnan"))