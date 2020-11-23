function foo(input) {
    let num = Number(input);
        function firstPrint(num) {
            let array = [];
            for (let i = 0; i < num; i++) {
                array.push(num);
            }
            console.log(array.join(' '));
        }
    for (let i = 0; i < num; i++) {
        firstPrint(num); 
    }
}

foo(3);
foo(7);
foo(2);
