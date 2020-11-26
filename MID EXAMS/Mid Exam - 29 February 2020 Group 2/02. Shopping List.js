function foo(input) {
    shoppingList = input.shift().split('!');
    input.forEach(x => {
        let [command, ...product] = x.split(' ');
        if(command === 'Urgent'){
            urgent(product, shoppingList)
        }else if( command === 'Unnecessary'){
            unnecessary(product, shoppingList)
        }else if( command === 'Correct'){
            correct(product, shoppingList)
        }else if( command === 'Rearrange'){
            rearrage(product, shoppingList)
        }
    });
    function urgent(product, shoppingList) {
        product = product.join('')
        if(!shoppingList.includes(product)){
            shoppingList.unshift(product)
        }
    }
    function unnecessary(product, shoppingList) {
        product = product.join('')
        if(shoppingList.includes(product)){
            shoppingList.splice(shoppingList.indexOf(product), 1)
        }
    }
    function correct(product, shoppingList) {
        if(shoppingList.includes(product[0])){
            shoppingList.splice(shoppingList.indexOf(product[0]),1, product[1]);
        } 
    }
    function rearrage(product, shoppingList) {
        product = product.join('')
        if(shoppingList.includes(product)){
            shoppingList.splice(shoppingList.indexOf(product),1)
            shoppingList.push(product)
        }
    }
    console.log(shoppingList.join(', '))
}

foo([
    'Milk!Pepper!Salt!Water!Banana',

    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]);