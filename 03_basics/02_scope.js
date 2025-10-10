// var c = 300
let b = 80
if(true) {
    let a = 10
    const b =20
    // var c = 30
    // console.log("Inneer b :", b);
    

}
// console.log(b);

function one() {
    const username = "Adnan"

    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    
    // two()
}
// one()

if(true) {
    const username = "Adnan"
    if(username === "Adnan") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//+++++ intresting +++++

console.log(addOne(5))
function addOne(num) {
    return num+1
}

// console.log(addTwo(3));

const addTwo = function(num ) {
    return num + 2
}
