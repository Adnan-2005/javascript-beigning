// IMMEDIATELY INVOKED FUNTION EXPRESSION 
// used to decline the golbal scope pollution 
(function chai() { //named iife
    console.log(`DB CONNECTED`);
}());

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) (`Adnan`)