// Function to generate Fibonacci sequence up to n
function fibonacci(n) {
    let fib_sequence = [0, 1]; // Initialize with first two Fibonacci numbers
    
    // Generate Fibonacci sequence up to n
    while (fib_sequence[fib_sequence.length - 1] + fib_sequence[fib_sequence.length - 2] <= n) {
        fib_sequence.push(fib_sequence[fib_sequence.length - 1] + fib_sequence[fib_sequence.length - 2]);
    }
    
    return fib_sequence;
}

// Printing Fibonacci numbers up to 100
const fibNumbers = fibonacci(100);
console.log("Fibonacci numbers up to 100:");
console.log(fibNumbers);