function solve(array) {

    let leftSide = 0;
    let rightSide = 0;
    let isFound = false;
    let currentIndex = 0;
    for (let i = 0; i <= array.length-1; i++) {
          leftSide = 0;
          rightSide = 0;
        for (let left = 0; left < i; left++) {
            leftSide += array[left];
        }
        for (let right = i + 1; right < array.length ; right++) {
            rightSide += array[right];
        }
        if(leftSide === rightSide){
            currentIndex = i;
            isFound = true;
        }
    
    }

    if(!isFound){
            console.log('no');
    }else{
        console.log(currentIndex);
        
    }
}


// solve([1, 2, 3, 3]);
// solve([1, 2]);
// solve([1]);
solve([1, 2, 3]);
// solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);