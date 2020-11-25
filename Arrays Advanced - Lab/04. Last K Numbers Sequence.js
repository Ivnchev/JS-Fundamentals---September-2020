function foo(n, k) {
    let newArr = [];
    sum = 1;
        for (let i = 0; i < n; i++) {
            if(newArr.length < 2){
                newArr.push(sum);
            }else{
                sum = 0;
                for (let j = newArr.length; j >= newArr.length - k; j--) {
                    let currentEl = newArr[j];
                    if(currentEl != undefined){
                    sum += currentEl;
                    }
                }
                newArr.push(sum);
            }
        }
    console.log(newArr.join(' '));
}

foo(6, 3);
foo(8, 2);