//  use a dot notation to return the result
const cohort3={year:2023,total:36,}
console.log(cohort3.year)
const person ={name:'mariam',gender:'female'}
console.log(person.name )

const car={model_name:'volv'}
const car2={'brand name':'toyota'}
|console.log(car.model_name)
console.log(car2['brand name'])

// object methods
// this refers to the object
const person1 = {
    firstName: "lumala",
    lastName : "mariam",
    id:5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
    };
    