function solve(arr1, arr2) {
    let arrCheck1 = [];
    let arrCheck2 = [];
    let arr3 = [];

    for (let i = 0; i <= arr1.length-1; i++) {
            if( i % 2 === 0 ){
                arrCheck1 = Number(arr1[i]);
                arrCheck2 = Number(arr2[i]);
                arr3.push(arrCheck1 + arrCheck2);
                
            } else {
                arr3.push(arr1[i].concat(arr2[i]));
            }
            
    }
    console.log(arr3.join(' - ')); 
}

solve([ '5', '15', '23', '56', '35' ], [ '17', '22', '87', '36', '11' ]);