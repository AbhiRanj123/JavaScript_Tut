//function definition
function myFunction(){
    console.log("Welocme to the Lecture 5 :)")
    console.log("Enjoy the Session!!!")
}

myFunction() //function call

function func(msg){
    console.log(msg+123)
}
func("I love JS:) @")

//function to compute sum of two number
function sum(x,y){
    ans  = x+y
    return ans;
}
// let x = prompt("Enter X:")
// let y = prompt("Enter Y:")
console.log(sum(12,12))

//ARROW FUNCTIONS

const mul=(x,y)=>{
    return x * y
}

console.log(mul(8,7))

//take a string from input and count the no of vowels in the string

function CountVowels(str){
    let count = 0;
    for(let m of str){
        if(m == 'A'||m=='E'||m=='I'||m=='O'||m=='U'||m=='a'||m=='e'||m=='i'||m=='o'||m=='u'){
            count++;
        }
    }
    return count;
}
// let s = prompt("Enter the string:")
// console.log(CountVowels(s))

//forEach methods for Arrays
//syntax
//arr.forEach()
//callback function

arr = ["abhishek",1,23,45,56,"Ranjan"]
arr.forEach(val=>{
    console.log(val);
})
arr.forEach(function func(val){
    console.log(val)
})
a = ["pune","delhi","mumbai"]
a.forEach((val,idx,a)=>{
    console.log(val.toUpperCase(),idx,a) 
})

a = [1,2,3,4,5,6,7,8,9,10]
let calcSqaure=(num)=>{
    console.log(num*num)
}
a.forEach(calcSqaure)
a.forEach(val =>{
    console.log(val*val)
})

//Map method for array
//syntax
//arr.map(callback_func(value,index,arr))
//it is also a "Higher OrdernFunctions/Methods"

array = [12,90,23,1,34]

//this map method will return a new array
console.log(array.map((val)=>{
    return (val%10)/2;
}))

// Filter method
//syntax
//arr.filter((val)=>{
    // return statement
// })

console.log(array.filter((val)=>{
    return val%10==0;
}))

//Reduce Method
// Performs some operations and reduces the array to the single value. It returns that single value
//syntax
//const sum = arr.reduce((val)=>{
// statement
// })
//This method is used to evaluate various things in a array
//here prev and curr points to the first element and second element of the array respectively and it moves next until reaches it size limit.
console.log(array.reduce((prev,curr)=>{
    return prev + curr;
}))
//find the maximum value of an array
console.log(array.reduce((prev,curr)=>{
    return prev < curr ? curr : prev;
}))
//find the minimum value of the array
console.log(array.reduce((prev,curr)=>{
    return prev < curr ? prev : curr;
}))
console.log(array.reduce((prev,curr)=>{
    return (prev + curr)/2;
}))

//Q1. Filter out the marks of the students scored more than 90
marks = [88,90,91,10,100,97,90.5,45,56,78]
console.log(marks.filter((val)=>{
    return val>90;
}))
//Q2.Take an input from user n. Create an array from 1 to n
// Use the reduce method to find the sum of elements of the array and also find the product of all numbers in an array

let n = prompt("Enter the number (n) : ")
arr1 = []
for(let i=0;i<n;i++){
    arr1[i] = i+1
}
console.log(arr1)
console.log(arr1.reduce((prev,curr)=>{
    return prev + curr;
}))
console.log(arr1.reduce((prev,curr)=>{
    return prev * curr;
}))

