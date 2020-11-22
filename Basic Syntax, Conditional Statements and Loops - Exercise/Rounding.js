function solve(num1, num2){
    let n1 = Number(num1);
    let n2 = Number(num2);
    let newNum = 0;
    if(n2 > 15){
        n2 = 15;
    }else{
        newNum = n1.toFixed(n2);
    }
    console.log(parseFloat(newNum));
}
solve('10.5', '3');
