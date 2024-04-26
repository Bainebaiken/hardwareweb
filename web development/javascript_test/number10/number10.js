function computeSum(num1, num2) {
    if (num1 === num2) {
        const tripleSum = 3 * (num1 + num2);
        return tripleSum;
    } else {
        const sum = num1 + num2;
        return sum;
    }
}

//similar numbers
const num1 = 5;
const num2= 5;
const result = computeSum(num1, num2);
console.log(`Sum of ${num1} and ${num2} is: ${result}`);

// different numbers
const num1b = 8;
const num2b = 3;
const resultb = computeSum(num1b, num2b);
console.log(`Sum of ${num1b} and ${num2b} is: ${resultb}`);