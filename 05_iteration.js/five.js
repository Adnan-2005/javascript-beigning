// FOR EACH

const coding = ["cpp", "java", "python", "js", "ruby"]
// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item) {
//     //console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        LanguageName: "javascript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "python",
        LanguageFileName: "py"
    },
    {
        LanguageName: "C++",
        LanguageFileName: "cpp"
    },
]
myCoding.forEach((item) => {
    console.log(item.LanguageName);
    
})

// values comes from databases in form of array