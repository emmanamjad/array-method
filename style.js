// ============remove from end

let fooditems = ["apple","banana","cherry","orange","peach"];
console.log(fooditems);
fooditems . pop();


// ===============

let color=["yellow","red","blue","orange","purple"];
let newcolor = color.toString();
console.log(newcolor);

// ============end
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("kiwi");

// ============to place at end
let hope = ["Banana", "Orange", "Apple", "Mango"];
console.log(hope);
let length = hope.push("Kiwi");


// ==========to add in start
let phal = ["Banana", "Orange", "Apple", "Mango"];
console.log(phal);
phal.unshift("Lemon");

//  ==========to merge
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let mybaby = ["Emilfdvdf", "Tobiassdvs", "Linusdfdfzv"];

let myChildren = myGirls.concat(myBoys,mybaby);
console.log(myChildren);



// ============to remove first one
const siblings = ["emman", "shayan", "rayyan", "zarran"];
console.log(siblings);
siblings.shift();


// ================permanently remove
let fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit);
delete fruit[0];



const farut = ["banana", "Orange", "Apple", "Mango"];
console.log(farut);
farut.copyWithin( )


const cities = ["karachi", "islamabad", "multan", "lahore", "hyderabad"];
const citrus = cities.slice(3);
console.log(citrus);

const phals = ["Banana", "Orange", "Apple", "Mango"];
phals.splice(3, 2,"Lemon", "Kiwi");
console.log(phals);

const companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
companies.splice(1, 1 ,"ola")
companies.push("amazon")
console.log(companies);
