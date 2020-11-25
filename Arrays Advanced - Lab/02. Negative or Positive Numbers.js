function foo(input){
    let newArr = [];

    for(let i =input.length; i > 0; i--){
        let current = input.shift();
        if(current < 0){
            newArr.unshift(current);
        }else{
            newArr.push(current);
        }

    }
    newArr.forEach(element => console.log(element));
}

foo([7, -2, 8, 9]);
foo([3, -2, 0, -1]);