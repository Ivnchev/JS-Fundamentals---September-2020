function foo(input) {
    let people = Number(input.pop());
    let employees =input.map(Number).reduce((a,b) => a+b);
    let count = 0;
    while(people > 0){
        count++;
        people -= employees;
        if(count % 4 === 0){ count++; }
    }
    console.log(`Time needed: ${count}h.`);
}

foo([ '5', '6', '4', '20' ]);
foo([ '1', '2', '3', '45' ])
foo([ '3', '2', '5', '40' ])