// array scort and reverse
// scort arranges aphebetically
// accending order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

// reverse
// reverses the elements in an array
// descending order
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
fruits2.reverse();
console.log(fruits2)

// By combining sort() and reverse(), you can sort an array in descending order:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
fruits1.reverse();
console.log(fruits1)

// Array toSorted() Method
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
// keeps it normal
console.log(months) 
// alters the original array
console.log(sorted)

// Array toReversed() Method
const month = ["Jan", "Feb", "Mar", "Apr"];
const reversed = month.toReversed();
// creates a new array, keeping the original array unchanged
console.log(month)
// alters the original array.
console.log(reversed)

// Numeric sort
// the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

const point1 = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(point1)


// Sorting an Array in Random Order
// you can sort an numeric array in random order
const points2 = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points2)

// The Fisher Yates Method
const points3 = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points3[i];
  points3[i] = points[j];
  points3[j] = k;
}
console.log(points3)

// Sort Ascending:
// arranges in ascending order
const points4 = [40, 100, 1, 5, 25, 10];
points4.sort(function(a, b){return a - b});
console.log(points4)

// Math.min() on an Array(method)
// You can use Math.min.apply to find the lowest number in an array:
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
 const myArray =[1,2,3,4,5,6,7,8,9];
 console.log(myArrayMin(myArray))

// Math.max() on an Array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
 const myArrays =[1,2,3,4,5,6,7,8,9];
console.log(myArrayMax(myArrays))

// use a home made method.
// loops through an array comparing each value with the lowest value found:
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {  min = arr[len]; }
    }
    return min;
  }
  const points5 = [40, 100, 1, 5, 25, 10];
console.log(myArrayMin(points5))

// max
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
  const points6 = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points6))

// Sorting Object Arrays
// sorting by year

const cars = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
cars.sort(function(a, b){return a.year - b.year}); // sorting by year in accending order
console.log(cars)
// descending order
const car = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
car.sort(function(a, b){return  b.year -a.year}); 
console.log(car)

// sort by type
// ascending order
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }); 
  console.log(cars)
// to change the sorting order u cahnde the returns one to the postive den the other to positive 

// Array Iteration
// array for each
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value + "<br>";
}
console.log(txt)

// Array map
// does not change the original array.
// does not execute the function for array elements without values.
// it multiplies the number by 2
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) { return value * 2; }
console.log(numbers2)

// Array flatMap()
// first maps all elements of an array and then creates a new array by flattening the array.
// multiplies each number in the array by 2
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr)


// Array filter
// creates a new array from elements with a value larger than 18:
const number = [45, 4, 9, 16, 25];
const over18 = number.filter(myFunction);
function myFunction(value, index, array) { return value > 18; }
console.log(over18)

// Array reduce
// method does not reduce the original array.
// inthis example we are geting de sum the the values are not reducing 
const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers4.reduce(myFunction);
function myFunction(total, value, index, array) { return total + value; }
console.log(sum)

// Array every()
// This example checks if all array values are larger than 18:
const number1 = [45, 4, 9, 16, 25];
let allOver18 = number1.every(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)

// Array some
// method checks if some array values pass a test
// This example checks if some array values are larger than 18:
const number32 = [45, 4, 9, 16, 25];
let someOver18 = number32.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18)

// Array keys
// Create an Array Iterator object, containing the keys of the array
const fruit = ["Banana", "Orange", "Apple", "Mango"];
// intialise the text 
let text ="";
const keys = fruit.keys();
for (let x of keys) { text += x + "<br>";}
console.log(text)

// Array entries
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit1.entries();
for (let x of f) { document.getElementById("demo").innerHTML += x; }
console.log()