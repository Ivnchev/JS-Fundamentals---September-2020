function foo(array, bomb) {
    let bombPower = bomb.shift();
    let bombRange = bomb.shift();
    let sum = 0;
    let index = array.indexOf(bombPower);
    while(index > -1){
        array.splice(Math.max((index - bombRange), 0), Math.min(bombRange, index));
        index = array.indexOf(bombPower);
        array.splice(index, bombRange +1);
        index = array.indexOf(bombPower);
    }    
    for (let i of array) {
        sum += i;
    }
    console.log(sum);
}
foo([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// foo([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// foo([1, 7, 7, 1, 2, 3], [7, 1]);
// foo([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);