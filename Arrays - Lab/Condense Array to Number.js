function solve(arr) {
    while(arr.length > 1){
        let condensed = Array(arr.length-1);
        for (let i = 0; i < arr.length -1; i++) {
            condensed[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = condensed;
    }
    console.log(arr[0]);
}

solve([5, 0, 4, 1, 2]);