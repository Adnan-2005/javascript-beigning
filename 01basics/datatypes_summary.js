// primitive 
// 7 types : String , number , null , boolean , undefined , Symbol , BigInt

// const score = 100
// const isLoggedIn = false
// const outsidetemp = null
// let useremail;

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId);




// reference (non primitive)
//Arrays , Object , Function

// const heros = ["saktiman", "iron man"]

// let myobj = {
//     name:"adnan"
//     age: 20
// }

// const myfunction = function() {
//     console.log("hello world " )
    
// }

// console.log(typeof outsidetemp)

//+++++++++++

//Stack(primitive) , Heap(non primitive)
// const myname = "adnan"
// let secondName = myname
// secondName = "ahmad"
// console.log(myname)
// console.log(secondName)

let userone = {
    email: "adnan@google.com",
    upi: "adnan@ybl"

}

let usertwo = userone
usertwo.email = "ahmad@google.com"
console.log(userone.email)
console.log(usertwo.email)

