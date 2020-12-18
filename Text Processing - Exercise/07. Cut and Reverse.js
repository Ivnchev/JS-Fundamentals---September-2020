function foo(input) {
    let first = input.slice(0, input.length / 2).split('').reverse().join('');
    let second = input.slice(input.length / 2).split('').reverse().join('');
    console.log(`${first}\n${second}`);
}
foo('tluciffiDsIsihTgnizamAoSsIsihT')