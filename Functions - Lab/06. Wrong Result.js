function solve(num1, num2, num3) {
    let newArr = [num1,num2,num3];
    let negativeNumbers = 0;
    let isNegative = false;
    for (let i = 0; i < newArr.length; i++) {
        let currentElement = newArr[i];
        if (currentElement < 0) {
            negativeNumbers++;
        } else if(currentElement === 0){
            isNegative = true;
            break;
        }
    }
    
    if((negativeNumbers === 1 || negativeNumbers === 3)&& isNegative == false){
        console.log('Negative');
    }else{
        console.log('Positive');
    }
}

solve(-1, 0, 1 );