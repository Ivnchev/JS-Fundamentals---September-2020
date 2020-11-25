function foo(array) {
    let guests = [];

    for (let info of array) {
        let current = info.split(' ');
        let name = current[0];
        if(!current.includes('not')){
            if(!guests.includes(name)){
                guests.push(name)
            }else {
                console.log(`${name} is already in the list!`);
            }
        } else {
        if(guests.includes(name)){
            guests = guests.filter((guestsName) => guestsName !== name)
        }else {
            console.log(`${name} is not in the list!`);
        }

        }
    }
    console.log(guests.join('\n'));
}
foo(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
// foo(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'] );

