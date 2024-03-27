const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, curVal) {
//                 console.log(`acc: ${acc} and curVal: ${curVal}`);
//                 return acc + curVal
// }, 0)

const myTotal = myNums.reduce( (acc,curVal) => (acc+curVal),0)

console.log(myTotal);

const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "java course",
        price: 2999
    },
    {
        item: "c++ course",
        price: 2999
    },
    {
        item: "python course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => (acc+item.price),0)

console.log(priceToPay);