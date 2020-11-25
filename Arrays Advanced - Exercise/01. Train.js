function foo(array) {
    let train = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let [command, number] = array[i].split(' ');
        number = Number(number);
        if(command == 'Add'){
                train.push(number);
        }else{
            number = Number(command);
            for (let index in train) {
                let wagon = train[index];
                if(number + wagon <= capacity){
                    train[index] += number;
                    break;
                }
            }  
        }
    }

    console.log(train.join(' '));
}

foo([ '32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75' ]);
foo([ '0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6' ]);