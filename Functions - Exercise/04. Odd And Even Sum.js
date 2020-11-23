function foo(input) {
    let num = String(input);
    let arr = [];
    let sumOdd = 0;
    let sumEven = 0;
    for (index of num) {
        arr.push(index);
    }
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if( currentNum % 2 === 0 ){
            sumEven += currentNum;
        }else{
            sumOdd += currentNum
        }
        
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

foo(1000435);
// foo(3495892137259234);