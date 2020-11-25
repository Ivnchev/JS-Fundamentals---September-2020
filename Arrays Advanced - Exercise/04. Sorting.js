function foo(array) {

    let length = array.sort((a,b) => {return a-b}).length;
    let newArr = [];
    
    for (let i = 0; i < length; i++) {
        let firstEl = array.pop();
        let lastEl = array.shift();
        newArr.push(firstEl,lastEl);
    }
    console.log(newArr.join(' '));
  
}
// foo([1, 3, 2, 5, 4]);
foo([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
