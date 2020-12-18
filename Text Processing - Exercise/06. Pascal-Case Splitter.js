function foo(input) {
    let pattern = /[A-Z]/g
    let output = '';
    for (let i of input.split('')) {
        if(i.match(pattern) && input.indexOf(i) > 0){
            output += ', ' + i;
        }else {
            output += i;
        }
    }
    console.log(output.trim());
}

foo('SplitMeIfYouCanHaHaYouCantOrYouCan');