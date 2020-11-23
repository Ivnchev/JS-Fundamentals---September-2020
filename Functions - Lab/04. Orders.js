function solve(product, pcs) {
    switch(product){
    case 'coffee':
        pcs = pcs * 1.50;
        console.log(pcs.toFixed(2));
        break;
        break;
    case 'water':
        pcs = pcs * 1.00;
        console.log(pcs.toFixed(2));
        break;
    case 'coke':
        pcs = pcs * 1.40;
        console.log(pcs.toFixed(2));
        break;
    case 'snacks':
        pcs = pcs * 2.00;
        console.log(pcs.toFixed(2));
        break;
    }
}

solve('water', 5);