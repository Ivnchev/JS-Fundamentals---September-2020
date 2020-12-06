function foo(input) {
    let map = new Map();
    input.forEach(x => {
        const counted = input.filter(k => k === x).length
        if(!map.has(x)){
            map.set(x, counted)
        }
    });
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1])
    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

foo(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])