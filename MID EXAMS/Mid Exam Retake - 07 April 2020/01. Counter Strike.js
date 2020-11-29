function foo(input) {
    let energy = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if(current !== 'End of battle'){
            if((energy - current) >= 0){
            energy -= current;
                if((i+1) % 3 === 0){
                energy += i+1;
                }
            }else {
                console.log(`Not enough energy! Game ends with ${i} won battles and ${energy} energy`);
            break;
            }
        }else{
            console.log(`Won battles: ${i}. Energy left: ${energy}`);
            break;
        }
    }
}
// foo( [100, 10, 10, 10, 1, 2, 3, 73, 10] );
foo( [200, 54, 14, 28, 13, 'End of battle'] );