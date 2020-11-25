function foo(array) {
    let newArr = [];

    for (let el of array) {
        if(!newArr.includes(el)){
            newArr.push(el);
        }
    }
    console.log(newArr.join(' '));
}

// foo([1, 2, 3, 4]);
foo([7, 8, 9, 7, 2, 3, 4, 1, 2]);
foo([20, 8, 12, 13, 4, 4, 8, 5]);