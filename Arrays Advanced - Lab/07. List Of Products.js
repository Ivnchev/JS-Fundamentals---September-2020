function foo(array) {
    let sorted = array.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i+1}.${sorted[i]}`);
    }
}

foo(["Potatoes", "Tomatoes", "Onions", "Apples"]);