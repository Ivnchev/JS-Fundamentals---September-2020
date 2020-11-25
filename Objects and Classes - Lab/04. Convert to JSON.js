function foo(name, lastName, hairColor) {
    let person = {name, lastName, hairColor}

    console.log(JSON.stringify(person));
}

foo('George', 'Jones', 'Brown' );