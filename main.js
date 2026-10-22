// Q1

const arr = [10 ,20 , 30 ,40 ,50]
let total = 0;
arr.forEach((ele) => {
         total+= ele
        
})
 console.log(`the sum of arr is : ${total}`)


 //Q2
 const arr1 = [1 ,2 , 3 ,4 ,5]

const NewArr1= arr1.map((num) => num*2)
console.log(NewArr1)


//Q3

const users = [
    {id :1 , name :"Ahmed" , age: 22},
    {id :2 , name :"Ali" , age: 25},
    {id :3 , name :"Atef" , age: 20},
];
users.forEach((ele , i) => {
    console.log (`${ele.name}`)
})
 //Q4
 const arr2 = [1 ,2 , 3 ,4 ,5 , 6 ,7 ,8]

const NewArr2= arr2.filter((num) => num % 2 == 0)
console.log(NewArr2)
//Q5
const users1 = [
     {name : "sif" , age : 17 },
     {name : "Ali" , age : 22},
     {name : "Ahmed " , age : 15},
     {name : "Sara " , age : 30},

];

const result = users1.filter ( (ele) => ele.age >= 18 )
 console.log(result)

//Q6
const products = [
    {id :1 , name :"laptop" , price: 30000},
    {id :2 , name :"phone" , price: 250000},
    {id :3 , name :"Tablet" , price : 1200000},

]
const NewProducts = products.forEach( (ele , i) => {
    if (ele.name === "phone") 
        console.log (ele)
}) 
//Q7
const products1 = [
    {id :1 , name :"laptop" , stock: 0},
    {id :2 , name :"phone" , stock: 0 },
    {id :3 , name :"Tablet" ,stock: 5} ,
];

console.log(products1.every( (ele) => ele.stock > 0))

//Q8

 

const cart = [
    { name: "Laptop", price: 30000 },
    { name: "Phone", price: 15000 },
    { name: "Tablet", price: 10000 }
];

const total1 = cart.reduce((sum, ele) => sum + ele.price, 0);

console.log(total1);
