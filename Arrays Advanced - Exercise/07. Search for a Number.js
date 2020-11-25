function foo(array, check) {
    array.splice(check[0] , array.length);
    array.splice(0, check[1]);
    let filtered = array.includes(check[2]);
    let counter = 0;
    if(filtered){
        for (let element of array) {
            if(element === check[2]){
            counter++;
        }
        }
    }
    console.log(`Number ${check[2]} occurs ${counter} times.`);
}
foo([5, 2, 3, 4, 1, 6], [5, 2, 3]);

