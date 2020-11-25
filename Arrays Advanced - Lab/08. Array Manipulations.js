function foo(array) {
    let numbers = array.shift().split(' ').map(Number);
    for (let i = 0; i < array.length; i++) {
         let [command, firstNum, SecondNum] = array[i].split(' ');
         firstNum = Number(firstNum);
         SecondNum = Number(SecondNum);
        switch(command){
            case 'Add':
                numbers.push(firstNum);
                break;
            case 'Remove':
                numbers = numbers.filter(el => el !== firstNum);
                break;
            case 'RemoveAt':
                numbers.splice(firstNum, 1);
                break;
            case 'Insert':
                numbers.splice(SecondNum, 0 , firstNum)
                break;
        }

    }
    console.log(numbers.join(' '));
}

foo(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);