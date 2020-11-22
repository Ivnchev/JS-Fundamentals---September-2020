function solve(array, magicNumber) {
    
    for (let i = 0; i < array.length; i++) {
        let result = 0;
        let currentElement = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let nextElement  =  array[j];
            result = currentElement + nextElement;
          if (result === magicNumber) {
              console.log(`${currentElement} ${nextElement}`);   
          }   
        }
    }
}

solve([1, 7, 6, 2, 19, 23],8);
// solve([14, 20, 60, 13, 7, 19, 8], 27);
// solve([1, 2, 3, 4, 5, 6], 6);