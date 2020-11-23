function foo(array) {
        let start = 0;
    
    
        let soap = start => (start + 10);
        let water = water => start + (start * 0.2);
        let vacuumClr = vacuumClr => start + (start * 0.25);
        let mud = mud => start - (start * 0.1);
        for (let i  of array) {
        switch(i){
            case 'soap' :
                start = soap(start);
                break;
            case 'water' :
                start = water(start);
                break;
            case 'vacuum cleaner' :
                start = vacuumClr(start);
                break;
            case 'mud' :
                start = mud(start);
                break;
        }
        }

        console.log(`The car is ${start.toFixed(2)}% clean.`);
    
}

foo(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);