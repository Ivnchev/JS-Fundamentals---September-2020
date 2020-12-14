function foo(input) {
    let name = null;
    let names =[];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g
    while((name = pattern.exec(input)) !== null){
        names.push(name[0])
    }
    console.log(names.join(', '));
}

foo(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);