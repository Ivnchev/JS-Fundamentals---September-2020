function solve(grade) {
        if(grade >= 2.00 && grade <= 2.99){
            console.log("Fail");
        }else if(grade >= 3.00 && grade <= 3.49){
            console.log('Poor');
        }else if(grade >= 3.50 && grade <= 4.49){
            console.log('Good');
        }else if(grade >= 4.50 && grade <= 5.49){
            console.log('Very good');
        }else if(grade >= 5.50 && grade <= 6.00){
            console.log('Excellent');
        }
}

solve(3.33);