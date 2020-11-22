function solve(num , arr) {
    let array = [];

    for (let i = 0; i < num; i++) {
        array.push(arr[i]);
    }
    array.reverse()
    console.log(array.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
