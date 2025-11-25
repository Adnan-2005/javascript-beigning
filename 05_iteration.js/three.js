// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
    
}

const greeting = "Hello World"
for (const greet of greeting) {
   // console.log(`Each char is ${greet}`);
    
}

//MAP
const map = new Map()
map.set('IN' , "INDIA")
map.set('IN' , "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
//console.log(map);
for (const [key, value] of map) {
    //console.log(key, '-:', value);
    
}

const myObj = {
    'game1' : 'NSF',
    'game2' : 'BGMI'
}
for (const [key, value] of myObj) {
    //console.log(key, '-:', value);
    
}