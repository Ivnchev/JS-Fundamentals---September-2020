function foo(input) {
    let f = input.shift().split(' ')
    let moves = 0;
    
    for (const x of input.slice(0 , input.indexOf('end'))) {
        let [m, n] = x.split(' ').map(Number);
        moves ++;
        if(cheat(f, m, n)){
            console.log("Invalid input! Adding additional elements to the board");
            f.splice(f.length / 2, 0, `-${moves}a`, `-${moves}a`)
        }else if(f[m] === f[n]){ 
            console.log(`Congrats! You have found matching elements - ${f[m]}!`);
            f.splice(Math.max(m,n), 1)
            f.splice(Math.min(m,n), 1)
        } else if( f[m] !== f[n] && !cheat(f, m, n)){ console.log('Try again!'); }
        if(f.length === 0){ console.log(`You have won in ${moves} turns!`); break; }
    }
    if(f.length > 0) { console.log(`Sorry you lose :(\n${f.join(' ')}`); }

    function cheat(f, m, n) {
        if(m == n || m < 0 || n < 0 || m >= f.length || n >= f.length ){
            return true;
        }
    }
}

foo( [ "1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end" ] );
foo( [ "a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end" ] );
foo( [ "a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end" ] );