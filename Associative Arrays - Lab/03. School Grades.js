function foo(input) {
    let map = new Map();
    input.forEach(x => {
        let [name, ...grades] = x.split(' ');
        grades = grades.map(Number);
        if(!map.has(name)){
            map.set(name, [])
            map.set(name, grades)
        } else {
            map.set(name, map.get(name).concat(grades))
        }        
    });
    let sorted = Array.from(map).sort((a,b) => average(a,b))
    console.log(sorted);
    
    function average(a,b){
        let aSum = 0;
        let bSum = 0;
        a[1].forEach(x => aSum += x);
        b[1].forEach(x => bSum += x);
        let result = (aSum / a[1].length) - (bSum / b[1].length);
        return result;
    }
    
    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }

}
foo(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);