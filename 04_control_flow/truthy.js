const userEmail = []
// if(userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Dont have user email");
// }

//falsy value
// => flase, 0 , -0 , BigInt 0n, "" ,null , undefined , NaN

//truthy values
// => ture , "0" 'flase' , " ", [] , {} , function(){}

// if (userEmail.length === 0 ) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is Empty");
    
}

// Nullish Coalescing Operator (??) : Null , undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
// console.log(val1);

// Ternary Operator
// condition ? true ? false
const teaprice = 100
teaprice <=90 ? console.log("less than 80") : console.log("more than 80");



