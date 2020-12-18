function foo(string) {
    let result = string.match(/[#][A-z]+/g);
    result.forEach(x => { console.log(`${x.substring(1)}`); });
}

foo('Nowadays everyone uses # to tag a #special word in #socialMedia');