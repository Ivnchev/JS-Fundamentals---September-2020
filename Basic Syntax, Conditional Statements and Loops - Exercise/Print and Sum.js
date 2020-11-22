function solve(start , end){
    start = Number(start);
    end = Number(end);

    let sum = 0;
    let numbers = '';

    for(let i = start; i <= end; i++){
        sum += i;
        numbers += i + ' ';
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);

}
solve('0', '26');
