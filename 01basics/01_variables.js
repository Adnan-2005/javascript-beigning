const accountId = 144553
let accountEmail = "adnan@google.com"
var accountpassword = "12345" 
accountCity = "lucknow"
let accountState;

// accountId = 2 // not allow to change

/* 
prefer not to be use var 
because of issue in block scope and functional scope 
*/

accountEmail = "ahamd@google.com"
accountpassword = "9129"
accountCity = "jaunpur"

console.table([accountId,accountEmail , accountpassword ,accountCity , accountState])
