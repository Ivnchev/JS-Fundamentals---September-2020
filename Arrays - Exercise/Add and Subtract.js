function solve(input) {
    let numbers = input;
    let originNumbers = input;
    let sumFirst = 0;
    let sumSecond = 0;
    let output = '';

        for (let i = 0; i < numbers.length; i++) {
            let currentNum = 0;
            currentNum += numbers[i];
            currentNum = Number(currentNum);
            sumFirst += currentNum;
            if(currentNum % 2 === 0){
                currentNum += i;
                numbers[i] = currentNum;
            } else {
                currentNum -= i;
                numbers[i] = currentNum;
            }
            sumSecond += currentNum;  
        }
        console.log(originNumbers);
        console.log(sumFirst);
        console.log(sumSecond);
        


}

solve(['5', '15', '23', '56', '35']);
