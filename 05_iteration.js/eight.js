const myNum = [1,2,3]
// const myTotal = myNum.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 4)
//const myTotal = myNum.reduce((acc,currVal) => acc+currVal,0)
//console.log(myTotal);

const ShoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "C++ course",
        price: 1599
    },
]

const myPrice =  ShoppingCart.reduce((acc,item) => acc+item.price , 0)
console.log(myPrice);


