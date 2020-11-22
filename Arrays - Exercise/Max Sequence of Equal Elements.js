function solve(array) {
    let currentIndex = 0;
    let counter = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let currentCount = 1;

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array [j];
            
            if(currentElement !== nextEl){
                break;
            }
            currentCount++;
        }
        if (currentCount > counter) {
            counter = currentCount;
            currentIndex = i;
        }
        
    }
    for (let i = 0; i < counter; i++) {
        newArray.push(array[currentIndex]); 
    }
    console.log(newArray.join(' '));
    

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// solve([1, 1, 1, 2, 3, 1, 3, 3]);
// solve([4, 4, 4, 4]);
// solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);