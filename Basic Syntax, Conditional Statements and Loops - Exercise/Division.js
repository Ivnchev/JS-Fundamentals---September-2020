function solve(num1){
    n1 = Number(num1);
    let devNumber = 0;
    let isNot = false;
    if(n1 % 10 == 0){
        devNumber = 10;
    }else if(n1 % 7 == 0){
        devNumber = 7;
    }else if(n1 % 6 == 0){
        devNumber = 6;
    }else if(n1 % 3 == 0){
        devNumber = 3;
    }else if(n1 % 2 == 0){
        devNumber = 2;
    }else{
        isNot = true;
    }

    if(!isNot){
    console.log(`The number is divisible by ${devNumber}`);
    }else{
    console.log('Not divisible');
    }
}
solve(30);
