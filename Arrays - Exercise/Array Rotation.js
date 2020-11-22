function solve(arr, num) {
    num = Number(num);

    while(num){
        arr.push(arr.shift()); // Rotation to left
        // arr.unshift(arr.pop()); // Rotation to right
        num--;
    }
   console.log(arr.join(' '));
}
foo([51, 47, 32, 61, 21], 2);
foo([32, 21, 61, 1], 4);
foo([2, 4, 15, 31], 5);

