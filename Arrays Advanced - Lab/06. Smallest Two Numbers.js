function foo(array) {
    let sorting = array.sort((a,b) => {return a-b});
    let sortA = x => array.sort((a,b) => {return a-b});
    sortA(array);
    console.log(array.slice(0,2).join(' '));
}

foo([30, 15, 50, 5]);