function sumOfTwoIntegers(num1, num2) {
    let sum = num1 + num2;
    if (num1 === num2) {
        console.log("The sum of " + num1 + " and " + num2 + " is " + (sum * 3) + " (tripled  sum).");
    } else {
        console.log("The sum of " + num1 + " and " + num2 + " is " + sum + ".");
    }
}

sumOfTwoIntegers(5, 5); 
sumOfTwoIntegers(3, 4); 



