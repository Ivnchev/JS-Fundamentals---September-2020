function solve(char1, char2) {
    let num1 = char1.charCodeAt(); //97
    let num2 = char2.charCodeAt(); //100
    let result = [];
    if(num2 < num1){
        for (let i = num2 + 1; i < num1; i++) {
            let currentChar = String.fromCharCode(i);
            result.push(currentChar);
        }
    }else{
        for (let i = num1 + 1; i < num2; i++) {
            let currentChar = String.fromCharCode(i);
            result.push(currentChar);
        }
    }
    return result.join(' ');
}

solve('a', 'd');
// solve('#', ':');
// solve('C', '#');