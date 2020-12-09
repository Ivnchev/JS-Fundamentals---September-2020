function foo(input) {
    const obj = {};
    input.forEach(x => {
        const [entry, plate] = x.split(', ')
        obj[plate] = '';
        if(obj.hasOwnProperty(plate)){
            if(entry === 'IN'){ obj[plate] = entry; }
            else { delete obj[plate]; }
        }
    });
    const keys = Object.keys(obj).sort((a,b) =>a.localeCompare(b));
    if(keys.length > 0){
        for (const i of keys) {
            console.log(i);
        }
    }else{ console.log('Parking Lot is Empty'); }
}
foo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
foo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)