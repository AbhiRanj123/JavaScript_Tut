let marks = [85,97,44,37,76,60];
console.log(marks);
let mix = [34,"Aryan",45];
console.log(mix);
console.log(mix.length);

let heroes = ['ironman','captain_america','thor','hulk']
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
for(let hero of heroes){
    console.log(hero)
}
let sum = 0;
for(let m of marks){
    sum += m;
}
console.log(`Avg. marks of the class is = ${sum/marks.length}`);

let price = [250,645,300,900,50];
for(let p =0;p<price.length;p++){
    price[p] = price[p] - (0.1*price[p]);
}
console.log(price);

let foods = ['Potato','Tomato','Ladyfinger','Carrot']
console.log(foods)
let deletedfoods = foods.pop();
console.log(foods)
console.log("Deleted",deletedfoods)
let mar = marks.toString();
console.log(mar)
console.log(marks)
let ans = marks.concat(mix,price)
console.log(ans)
//add element at the head
ans.unshift("Abhishek");
console.log(ans)
//delete element from the head of the array
ans.shift()
console.log(ans)
//used to add, delete or replace the item in an array

//delete element
console.log(ans.slice(5,14))
console.log(ans)
//add element or replace
ans.splice(5,3,0,0,0)
