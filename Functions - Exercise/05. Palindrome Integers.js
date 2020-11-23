function foo(array) {
    
    for (let i = 0; i < array.length; i++) {
        let currentNumber = String(array[i]);
        let reversedNumber = Number(currentNumber.split('').reverse().join(''));
        if (Number(currentNumber) === reversedNumber) {
            console.log('true');
        } else {
            console.log('false');
        }  
    }

}

// foo([123,323,421,121]);
foo([32,2,232,1010]);
