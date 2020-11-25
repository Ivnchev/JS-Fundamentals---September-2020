function foo(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());
    return first + last;
}

foo(['20', '30', '40']);