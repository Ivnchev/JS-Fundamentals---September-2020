function foo(fac, n) {
    
    function factorial(fac) {
        let currentFac = 1;
        for (let i = 1; i <= fac; i++) {
            currentFac *= i; 
        }
        return currentFac;
    }
console.log((factorial(fac) / factorial(n)).toFixed(2));
}

// foo( 5, 2 );
foo( 6, 2 );