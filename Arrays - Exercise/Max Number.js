function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let isBigger = false;
        for (let j = i; j < array.length; j++) {
            if(currentNum <= array[j + 1]){
                isBigger = true;
                break;
            }  
        }
        if(!isBigger){
            result.push(currentNum);
        }
    }
    console.log(result.join(' '));
    
}
solve([27, 19 ,42 ,2 ,13 ,45 ,48 ]);
// solve([1, 4, 3, 2]);
// solve([14, 24, 3, 19, 15, 17]);
