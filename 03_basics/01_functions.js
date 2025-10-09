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
// console.log(LoginUserMessage("Adnan"))

function calculatecartprice(val1 , vla2, ...num) {
    return num

}
// console.log(calculatecartprice(200,100,300));
const user = {
    username: "Adnan",
    price:"199"
}
function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}
handleObject({
    username: "addy",
    price: 123
})

const newArray = [100 , 200 , 300 , 400]
function returnsecondvalue(getArray) {
    return getArray
}
console.log(returnsecondvalue(newArray));

