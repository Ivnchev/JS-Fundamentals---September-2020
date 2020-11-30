function foo(input) {
    let passengers = Number(input.shift())
    let lift = input.shift().split(' ').map(Number);
    // massive input empty spots
    while(passengers !== 0 && check(lift)){
        lift = lift.map( w => {
            let freeSpace = 4 - w;
            if (freeSpace > passengers){ freeSpace = passengers}
            passengers -= freeSpace;
            w += freeSpace;
            return w;
        })
    }

    if(check(lift)){ console.log('The lift has empty spots!') }
    if(passengers > 0){ console.log(`There isn't enough space! ${passengers} people in a queue!`); }
    console.log(lift.join(' '))
    function check(array) {
        return array.filter( x => x < 4).length > 0;
    }
}

foo([ '15', '0 0 0 0 0' ]);
foo([ '20', '0 2 0' ]);