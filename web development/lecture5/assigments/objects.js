// Alert "John" by extracting information from the person object.

const person = {
    firstName: "John",
    lastName: "Doe"
  };
  console.log(person.firstName)

//   part2

//   Add the following property and value to the person object: country: Uganda.
const person2 = {
    firstName: "Jane",
    lastName: "Doe"
  };
  // Adding the 'country' property
person2.country = "Uganda";

// Now, person2 object includes the 'country' property
console.log(person2);

// part3
// Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50").
const person3 = {
    name: "John",
    age: 50
  };
  
  // Access the object properties
  console.log(`${person3.name} is ${person3.age}`);


