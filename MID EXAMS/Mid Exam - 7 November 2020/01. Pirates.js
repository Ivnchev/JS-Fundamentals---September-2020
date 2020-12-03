function foo(days, plunger, expected) {
    let total = 0;
    for (let i = 1; i <= days; i++) {
        total += plunger
        if(i % 3 === 0){ total += plunger / 2 }
        if(i % 5 === 0){
            
            total -= (total * 0.3);
        }
    }
    if(total >= expected){
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }else {
        let result = (total / expected) * 100;
        console.log(`Collected only ${result.toFixed(2)}% of the plunder.`);
    }
}

// foo(5, 40, 100)
foo(10, 20, 380)