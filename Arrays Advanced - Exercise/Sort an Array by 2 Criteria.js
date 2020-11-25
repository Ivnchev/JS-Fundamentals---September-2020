function foo(array){
    
    array.sort(customSorting);
    console.log(array.join('\n'));


    function customSorting(a,b) {
        if (a.length > b.length) {
            return 1;
        } else if(a.length < b.length){
            return -1;
        }else{
            return a.localeCompare(b);
        }
    }
    
}
foo(["alpha", "beta", "gamma"]);
foo(["Isacc", "Theodor", "Jack", "Harrison", "George"]);