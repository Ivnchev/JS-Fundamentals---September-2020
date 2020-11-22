function solve(num){
    n = Number(num);
    for(let i = 1; i <= 10; i++){
        let total = i * n;
        console.log(`${n} X ${i} = ${total}`);
        
    }

}
solve(5);