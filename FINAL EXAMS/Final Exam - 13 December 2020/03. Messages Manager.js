function foo(input) {
    let n = Number(input.shift())
    let obj = {}
    let list = {
        'Add': (user, send, recived) => {
            if(obj[user] === undefined){
                obj[user] = { send, recived }
            }
        },
        'Message': (sender, receiver) => {
            if(obj[sender] !== undefined && obj[receiver] !== undefined ){
                obj[sender].send += 1
                obj[receiver].recived += 1
            if(obj[sender].send + obj[sender].recived >= n) { delete obj[sender]; console.log(`${sender} reached the capacity!`); }
            if(obj[receiver].send + obj[receiver].recived >= n){ delete obj[receiver]; console.log(`${receiver} reached the capacity!`); }
            }
        },
        'Empty': (user) => { 
            if(obj[user] !== undefined){ delete obj[user] }
            else if(user === 'All'){ obj = {} }
        },
    }
    let x = input.shift()
    while( x !== 'Statistics' ){
        let [ cmd, name, a, b] = x.split('=').map( x => isNaN(x) ? x : Number(x))
        list[cmd](name, a,b)
        x= input.shift()
    }
    
    console.log(`Users count: ${Object.keys(obj).length}`);
    Object.entries(obj).sort( (a,b) => b[1].recived - a[1].recived || a[0].localeCompare(b[0]))
        .forEach(x => {
            console.log(`${x[0]} - ${x[1].recived + x[1].send}`);
        });
}

foo([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
  ])
foo([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
  ])
foo([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
  ])