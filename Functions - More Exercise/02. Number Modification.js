function foo(input) {
    let inputStr = String(input);
    let newArr = [];
    let sum = 0;
    let result = 0;
        for (let i of inputStr) {
            newArr.push(Number(i));
        }
    function loopingSum(newArr) {
        for (let i = 0 ; i < newArr.length ; i++) {
            let currentNum = newArr[i];
            sum += currentNum;
        }
    }
    loopingSum(newArr);
        function checkIsBigger(result) {
        while(result < 5){
        result = Math.ceil(sum / newArr.length);
            
            if(result > 5){
                return true;  
            }
            newArr.push(9);
            sum = 0;
            loopingSum(newArr);
        }   
    }
    checkIsBigger(result);
        if(checkIsBigger){
            console.log(newArr.join(''));
        }
}

foo(101);
// foo(5835);