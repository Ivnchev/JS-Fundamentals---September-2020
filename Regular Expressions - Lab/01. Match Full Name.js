function foo(input) {
    let names = [];
    let valid = null;
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
    while((valid = pattern.exec(input)) !== null){ names.push(valid[0]) }
    console.log(names.join(' '))
}
foo(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'])