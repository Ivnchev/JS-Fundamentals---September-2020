function solve(array) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < array.length; i++) {
        if( array[i] % 2 === 0 ){
            sumEven += array[i];
        } else {
            sumOdd += array[i];
        }
        
    }

    console.log(sumEven - sumOdd);
}

solve([2, 4, 6, 8, 10]);