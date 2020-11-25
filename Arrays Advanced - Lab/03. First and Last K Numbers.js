function foo(input) {
    let num = input.shift();
    let first = input.slice(0,num);
    let last = input.slice(Math.max(input.length - num, 0));
    console.log(first.join(' '));
    console.log(last.join(' ')); 
}


foo([2, 7, 8, 9]);
foo([3, 6, 7, 8, 9]);