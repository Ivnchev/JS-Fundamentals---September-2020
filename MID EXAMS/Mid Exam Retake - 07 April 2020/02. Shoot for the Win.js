function foo(input) {
    let sequence = input.shift().split(' ').map(Number);
    let result = input.slice(0, input.indexOf('End')).map(Number)
    result.forEach(x => {
        if(x < sequence.length && x > -1){
        let current = sequence[x]
        sequence[x] = -1
        // map return 
        sequence = sequence.map( y => {
                if(y === -1){ return y }
                else if(y > current ){ return y -= current }
                else { return y += current }
        })
        }
    });
    const shoot = sequence.filter(x => x === -1).length
    console.log(`Shot targets: ${shoot} -> ${sequence.join(' ')}`);
}

foo( ['24 50 36 70', 0, 4, 3, 1, 'End'] );
foo( ['30 30 12 60 54 66', 5, 2, 4, 0, 'End'] );
