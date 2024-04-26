function fibonacci() {
    let num1 = 1, num2 = 1, nextNum;
    console.log(num1);
    console.log(num2);
    while (true) {
        nextNum = num1 + num2;
        if (nextNum > 100) {
            break;
        }
        console.log(nextNum);
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(); 