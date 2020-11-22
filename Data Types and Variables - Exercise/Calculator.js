function solve(num1, operator, num2) {
    num1 = Number(num1);
    operator = String(operator);
    num2 = Number(num2);
    let result = 0;

    if (operator == '+') {
        result = num1 + num2;
    } else if(operator == '-'){
        result = num1 - num2;
    } else if (operator == '*'){
        result = num1 * num2;
    } else if (operator == '/'){
        result = num1 / num2;
    }
    console.log(result.toFixed(2));
    
}

solve('5', '+', '10');