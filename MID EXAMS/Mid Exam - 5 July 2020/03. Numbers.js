function foo(input) {
    input = input.split(' ').map(Number);
    let avgNum = input.reduce((a,b) => a+b) / input.length;
    let greaterNums = input.filter(x => x > avgNum);
    let sorted = greaterNums.sort((a,b) => b-a);
    if(sorted.length > 5){
        sorted.splice(5, sorted.length - 5);
        console.log(sorted.join(' '));  
    }else if(sorted.length === 0){
        console.log('No');
    }else{
        console.log(sorted.join(' '));
    }
}
// foo('10 20 30 40 50');
foo('5 2 3 4 -10 30 40 50 20 50 60 60 51');
foo('1');
foo('-1 -2 -3 -4 -5 -6');


