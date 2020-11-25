function foo(array) {
    let result = [];
    function isOdd(x){
    for (let i = 0; i < array.length; i++) {
        let current = Math.abs(i % 2 == 1);
        if(current){
            result.push(array[i]);
        }
    }
    }
    isOdd(array);
    let newArr = result.map((x) => x * 2);
    console.log(newArr.reverse().join(' '));
}

// foo([10, 15, 20, 25]);
foo([3, 0, 10, 4, 7, 3]);