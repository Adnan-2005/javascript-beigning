//for in
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by window"
}
for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}

const programming = ["js", "cpp" , "rb", "py", "java"]
for (const key in programming) {
   //console.log(programming[key]);
   
}

const map = new Map()
map.set('IN' , "INDIA")
map.set('IN' , "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
for (const key in map) {
    console.log(key);
    
}