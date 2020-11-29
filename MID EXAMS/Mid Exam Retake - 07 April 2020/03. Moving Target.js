function foo(input) {
    let targets = input.shift().split(' ').map(Number)
    const commandMap = {
        'Shoot': (x, y) => {
            if(targets[x] !== undefined){ targets[x] -= y }
            if(targets[x] <= 0 && targets[x] !== undefined){targets.splice( x, 1) } 
        },
        'Add':  (x, y) => { 
            if(targets[x] !== undefined){targets.splice( x, 0, y)}
            else {console.log('Invalid placement!');}
        },
        // remove elements in radius
        'Strike': (x, y) => { 
            if( targets[x] !== undefined ){
                if(targets[x + y] !== undefined && targets[x - y] !== undefined){
                    targets.splice(x - y , y * 2 + 1)
                }else { console.log('Strike missed!'); }
            }
         },
    }
    input.slice(0, input.indexOf('End')).forEach(x => {
        let [command, a, b] = x.split(' ').map(x => isNaN(x) ? x : Number(x))
         commandMap[command](a,b) 
    });
    console.log(targets.join('|'));
}

foo([ '52 74 23 44 96 110','Shoot 5 10', 'Shoot 1 80' , 'Strike 2 1' , 'Add 22 3' , 'End' ]);
foo(['47 55 85 78 99 20', 'Shoot 1 55', 'Shoot 8 15', 'Strike 2 3', 'Add 0 22', 'Add 2 40', 'Add 2 50', 'End' ]);

