function foo(input) {
    let total = 0;
    let command = 0;
    for (let i = 0; i < input.length; i++) {
        if(input[i] !== 'special' && input[i] !== 'regular'){
            if(Number(input[i]) < 0) {
                console.log("Invalid price!");
            }else {
            total += Number(input[i]);
            }
        }else {
            command = input[i];
            break;
        }
    }
    
    if(total !== 0){
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${total.toFixed(2)}$`);
    let taxes = x => {
        let taxes = total * 0.2;
        total = total* 1.2;
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
    }
    let discount = x => {
        total *= 0.90;
    }
    let totalPrice = x =>{
        console.log('-----------');
        console.log(`Total price: ${total.toFixed(2)}$`);
    }
    taxes(total);
    if(command == 'special'){
    discount(total);
    }
    totalPrice(total);
    }else {
        console.log("Invalid order!" );
    }
    
}
// foo( [ '1050', '200', '450', '2', '18.50', '16.86', 'special' ] )
foo( [ '1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular' ] )
// foo( [ 'regular' ] )