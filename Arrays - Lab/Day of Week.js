function solve(input) {
    let wDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(input >= 1 && input <= 7){
        input = input -1
        console.log(wDays[input]);
    } else {
        console.log('Invalid day!');
        
    }

}

solve(1);