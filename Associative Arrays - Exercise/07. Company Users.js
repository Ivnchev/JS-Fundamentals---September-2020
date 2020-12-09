function foo(input) {
    const company = {};
    input.forEach(x => {
        const [companyName, employee] = x.split(' -> ');

        if(!company.hasOwnProperty(companyName)){
            company[companyName] = []
            if(!company[companyName].includes(employee)) company[companyName].push(employee)
        }else {
            if(!company[companyName].includes(employee)) company[companyName].push(employee)
        }
    });  

    input = Object.keys(company).sort((a,b) => a.localeCompare(b))
    
    for (const key of input) {
        console.log(key);
        company[key].forEach(x => console.log(`-- ${x}`))
    } 
}

foo([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )