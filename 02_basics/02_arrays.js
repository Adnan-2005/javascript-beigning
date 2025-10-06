const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["Superman", "batman", "flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros);

// const another_arr = [1,2,3,4 , [1,2,3], [5,6,7,[8,9]]]
// const another_arr2 = another_arr.flat(Infinity)
// console.log(another_arr2);
 
// console.log(Array.isArray("adnan"));
// console.log(Array.from("adnan"));
// console.log(Array.from({name: "adnan"}));

let sc1 = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc1, sc2 ,sc3));






