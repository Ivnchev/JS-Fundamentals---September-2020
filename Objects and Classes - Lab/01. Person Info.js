function foo(firstName, lastName, age) {
    let person = {
        firstName : firstName,
        lastName : lastName,
        age : age
    };
    for (const key in person) {
        console.log(`${key}: ${person[key]}`)
    }
    
}

foo("Peter",  "Pan", "20" );