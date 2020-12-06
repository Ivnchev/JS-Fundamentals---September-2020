function foo(input) {
    let obj = {};
    input.forEach(x => {
        let [name , phone] = x.split(' ');
        obj[name] = phone;
    });
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`); 
    }
    
}
foo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);