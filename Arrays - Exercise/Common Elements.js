function solve(arr1, arr2) {
    let arrayCheck1 = [];
    let arrayCheck2 = [];
    let isCorrect = false;
    for (let i = 0; i <= arr1.length-1; i++) {
        arrayCheck1 = arr1[i];
        for (let j = 0; j <= arr2.length-1; j++) {
        arrayCheck2 = arr2[j];
            if( arrayCheck1 === arrayCheck2){
                console.log(arr1[i]);
                isCorrect = true;
                break;
            } 
        }
    }
}

solve([ 'Hey', 'hello', 2, 4, 'Peter', 'e' ], [ 'Petar', 10, 'hey', 4, 'hello', '2' ]);