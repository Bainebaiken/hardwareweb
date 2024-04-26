// example of String indexOf()

const text = "Please locate where 'locate' occurs!";
const index = text.indexOf("locate");
console.log(index)
// JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, 2 is the third, ...
// u can call it indexing 

// example of lastindexof()
let text1 = "Please locate where 'locate' occurs!";
let index1= text.lastIndexOf("locate");
console.log(index1)
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// example of search() regural expression
const text3 = "Please locate where 'locate' occurs!";
 const search=text3.search("locate");
console.log(search)

//  example   of match()
//  Perform a global search for "ain": This finds all ain within the string

const text2 = "The rain in SPAIN stays mainly in the plain";
// specific occurance
console.log(text2.match("ain"))
// with the some namingway
 console.log(text2.match(/ain/g))
//  all
 console.log(text2.match(/ain/gi))

//  match all example
const text5 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
console.log(Array.from(iterator))

//  example of includes()
// method returns true if a string contains a specified value.
// Otherwise it returns false.
// Check if a string includes "world":
const text6 = "Hello world, welcome to the universe.";
const startAtTwelve=text.includes("world",12);
console.log(startAtTwelve)

// search from position 0
const startAtZero=text6.includes("world");
console.log(startAtZero)

//  Example of startsWith
// returns true if a string begins with a specified value
let text7 = "Hello world, welcome to the universe.";
const startsWith= text7.startsWith("Hello");
console.log(startsWith)
const some=text7.startsWith("world")
console.log(some)

// JavaScript Template Strings
// Quotes Inside Strings

const text8 = `He's often called "Johnny"`;
console.log(text8)
// or
const text9 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text9)
// Variable Substitutions
let firstName = "John";
let lastName = "Doe";
let text10 = `Welcome ${firstName}, ${lastName}!`;
console.log(text10)

const cohort3={
    student_profile:{name:"mariam",age:20},
    year:"2024"
};
const student_inf =
`My name is ${cohort3.student_profile.name},Am ${cohort3.student_profile.age}years old,Am in witu ${cohort3.student_profile.year}class.`;
console.log(student_inf);

// toFixed() Method returns a string, with the number written with a specified number of decimals:
let z = 9.656;
z.toFixed(0);
console.log(z.toFixed(2))