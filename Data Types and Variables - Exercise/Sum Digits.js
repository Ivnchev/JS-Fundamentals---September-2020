function solve(input) {
    let numbers = String(input).split("");
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = 0;
        currentNumber += numbers[i];
        currentNumber = Number(currentNumber);
        total += currentNumber;
    }

    console.log(total);
    
}

solve('245678');