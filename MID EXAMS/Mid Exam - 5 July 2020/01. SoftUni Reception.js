function foo(input) {
    let students = Number(input.pop());
    let studentLength = students;
    let employeePower = input.map(Number).reduce((a,b) => a +b);
        for(let i= 1; i <= studentLength; i++){
            if(!(i % 4 === 0)){
                students -= employeePower;
            }
            if(students <= 0 ){
                console.log(`Time needed: ${i}h.`);
                break;
            }
        }
}

foo([ '5', '6', '4', '20' ]);
foo([ '1', '2', '3', '45' ]);
foo([ '3', '2', '5', '40' ]);
