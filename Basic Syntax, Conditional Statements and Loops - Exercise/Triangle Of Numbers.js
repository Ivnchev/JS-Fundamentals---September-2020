function solve(num){
    n = Number(num);
    let printCurrent = '';
    let isOver = false;
    for(let rows = 1; rows <= n; rows++){
        for(let cols = 1; cols <= rows; cols++){
            if(cols > n){
                isOver = true;
                break;
            }
            printCurrent += rows + ' ';
        }
        console.log(printCurrent);
        printCurrent = '';
        if(isOver){
            break;
        }
        
    }
}
solve(6);