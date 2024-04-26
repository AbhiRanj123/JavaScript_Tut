// console.log() is used to print the content at the terminal. It may take the content inside the parenthese in single or double ""
console.log("Hello JS!");
console.log("Happy Ram Navami");

//Variables are the containeers used to store data which vary throughout the program
// age = 24
// console.log(age)
// console.log(age+1);
x1=null;
console.log(x1);
y=undefined;
console.log(y);
// name='Abhishek Ranjan'
// console.log(name)
isFollow = false
console.log(isFollow)

//let, const, and var in JS
//var : Variable can be re-declared & updated. A global scope variable.
//let : Variable cannot be re-declared but can be updated. A block scope variable.
//const : Variable cannot be re-declared or updated. A block scope variable. It must be initialized with a value at the time of declaration.(otherwise it will throw the "SYNTAX ERROR")


//GLOBAL SCOPE VARIABLE MEANS it will be available for throughout the program

//VAR
var price = 1000;
var price = 4000;
console.log(price)
//here console.log(price)will give the output of 4000 as it is the latest valuee to the var price

//BLOCK SCOPE VARIABLE MEANS it will be availabe within the block
//for eg

//LET
{
    let a=5;
    console.log(a);
    //but we define again 
    //let a = 10;
    //it will throw error
    //undefined
}

//but if we initialize the a to the other block then there will be no issues like

{
    let a =10;
    console.log(a)
}

let age = 24;
console.log(age);
console.log(age+1);


//CONST
const name = "Abhishek ranjan";
console.log(name);
//Here it will throw error
// name = "Ravi";
// console.log(name);

//DATATYPES
//1. PRIMITIVE DT = Number, String, Boolean, Undefined, Null, BigInt, Symbol
let a = 12;
console.log(a);
console.log(typeof a);
fullN = "NIT SILCHAR";
console.log(typeof fullN);
isTrue = true;
console.log(typeof isTrue);
let x;
console.log(typeof x);
let c = null;
console.log(typeof c);
let p = BigInt("123");
console.log(typeof p);
let m = Symbol("Hello");
console.log(typeof m);

//2. NON-PRIMITIVE DT = OBJECTS
///Object is a collection of values of various types
//eg
const Students={
    name:"Rahul",
    age:21,
    CGPA:9.5,
    isPass:true
};
console.log(Students.name);console.log(Students['age']);

const Product={
    PdtName : "Parker Pen 1520",
    Price : "Rs."+ 250 + "/-",
    discount : 20 + "% " + "off"
};
console.log(Product['PdtName']);
console.log(Product['Price']);
console.log(Product['discount']);