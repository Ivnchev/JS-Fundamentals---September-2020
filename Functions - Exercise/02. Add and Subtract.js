function solve(num1, num2, num3) {
    
    let sum = (num1,num2) => num1 + num2;
    let result = sum(num1,num2);
    let subtract = (result, num3) => result - num3;

    console.log(subtract(result,num3));
}

solve(23,6,10);