for(let i =0;i<5;i++){
    console.log('Loops And Strings\n');
}
let sum = 0;
for(let i = 0;i<1000010;i++){
    sum = sum +(i+1);
}
console.log(sum);
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
let p =12;
do{
    console.log(p);
    p++;
}
while(p<=20);

//for-of-Loop
// used for strings
//for(let val of strVal){
    //do some work;
// }
let str = "Javascript";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);

//for-in-Loop
//used for objects
let student ={
    name:"Abhishek",
    age: 21,
    cgpa : 8.77,
    isPass : true
};
for(let key in student){
    console.log(student[key]);
}

//1. even numbers
for(let i=0;i<=100;i++){
    if(i%2!==0){
        console.log(i);
    }
}

//2.
// let Rand_Num = prompt("Enter the random number:");
// let userNum = prompt("Guess the number:");
// console.log(Rand_Num);
// console.log(userNum);
// while(userNum!==Rand_Num){
//     // if(userNum >= Rand_Num){
//     //     userNum--;
//     // }
//     // else{
//     //     userNum++;
//     // }
//     userNum = prompt("You guessed the wrong number. Again guess the number:");
// }
// console.log("You guessed it right!!!");

//STRINGS

let st = "   Abhishek CSE   ";
st1 = st.trim();
console.log(st);
console.log(st1);
let s = 'Abhishek';
console.log(s);
let t = `Survey`;
console.log(t);
let stat = {
    name : "Pen",
    price : 20,
};
//use template literal

//String Interpolation
//To create strings by doing substitution of placeholders
// `string text ${expression}string text`
console.log(`The price of ${stat.name} is ${stat.price} rupees.`);

let m = "National Institute of Technology";
o = m.toUpperCase();
console.log(o);
console.log(o.slice(1,15)) //it will slice it using the starting index(here 1) and upto end index-1(here 14);
let s1 = "Abhsihek "
let s2 = "Ranjan"
console.log(s1.concat(s2))
s3 = s2.replace('Ranjan','Mishra');
// console.log()
console.log(s1.concat(s3))
console.log(s3.charAt(5))

let input = prompt("Enter the full name:");
let username = "@" + input + input.length
console.log(username)