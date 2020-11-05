//////////////////PROBLEM 1////////////////////

//Create a variable called myName that is a string data type

//Code here
let myName = "Bob"
//////////////////PROBLEM 2////////////////////

//Create a variable called myAge that is a number data type

//Code here
let myAge = 26
//////////////////PROBLEM 3////////////////////

//Create a variable called lovesCode that is a boolean data type

//Code here
let lovesCode = true 
//////////////////PROBLEM 4////////////////////

//Create a variable called greatestFear that is undefined because we fear nothing

//Code here
greatestFear = undefined 
//////////////////PROBLEM 5////////////////////

//Create a variable called devMountainGoal that is null because we are just starting out

//Code here
let devMountainGoal = null; 
//////////////////PROBLEM 6////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

//Code here
function greeting(name){
  return "Hello, " + name 
}
//////////////////PROBLEM 7////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

//Code Here
const newGreeting = function(name){
  return "Hello, " + name
}
//////////////////PROBLEM 8////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting.

//Code Here

//////////////////PROBLEM 9////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

//Code Here
const groceries = ["apples", "milk", "eggs", "bread"]
//////////////////PROBLEM 10////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).

//Code Here
let dog = {
  name: "Bruce",
  color: "Brown",
  age: 3,
  goodBoy: true
}
//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

//Code Here
devMountainClassPet = "Bruce";
//////////////////PROBLEM 11////////////////////

//Write a function called nameCheck that takes in a name parameter. 
//nameCheck should check if the name equals 'Steven'. If it does,
// return 'What is up Steven?'
//If the name parameter is Bryan, return 'Hey Bryan!'
// If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// with NAMEPARAM being the name parameter being passed in
function nameCheck(name){
  if(name === "Steven"){
    return "What is up Steven?"
  } else if(name === "Bryan"){
    return "Hey Bryan!"
  } return "Cool name, " + name
}
// Code here

//////////////////PROBLEM 12////////////////////

// Create a function called add that takes in two parameters
// that will be numbers.
// The add function should return the two parameters added together

//Code Here
function add(num1, num2){
  return (num1 + num2)
}
//Now invoke add, passing in the numbers 3 and 4
//storing the result in the variable mathSum.

//Code Here
console.log(add(3, 4)) 
const mathSum = add(3, 4)
//////////////////PROBLEM 13////////////////////

//Write a function called faveColorFinder that takes in one parameter called color
// that will be a string.
// If the passed in color equals 'red', return 'red is a great color'
// If the passed in color equals 'green', return 'green is a solid favorite color'
// If the passed in color equals 'black', return 'so trendy'
// Otherwise, you should return the string 'you need to evaluate your favorite color choice'
function faveColorFinder(color){
  if(color === "red"){
    return "red is a great color"
  } else if(color === "green"){
    return "green is a solid favorite color"
  } else if(color === "black"){
    return "so trendy"
  } return "you need to evaluate your favorite color"
}
// Code here

//////////////////PROBLEM 14////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "realDuck"];

//////////////////PROBLEM 15////////////////////

//Create a variable called age with your age assigned to you

// Code Here
let age = 26
// FLASH FORWARD TO NEXT YEAR
// reassign the value of age to be one greater than it was, because, we all get older

// Code Here
let age = 27
// Good news! We can live forever. Set your age to 999

// Code Here
let age = 999