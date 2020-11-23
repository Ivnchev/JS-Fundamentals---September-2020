function foo(input) {
    let number = Number(input);
    let sum = 0;
    let devisionCheck = (num) => {
        if(number % num == 0){
            return true;
        }
    };
    let counter = 0;
    for (let i = 1; i < number; i++) {
        let devCheck = devisionCheck(i);
        counter++;
        if(devCheck){
            sum += counter;
        }
              
    }
    if(sum === number){
        console.log('We have a perfect number!');
    }else{
        console.log("It's not so perfect.");
    }
}

// foo(6);
// foo(28);
foo(1236498);
