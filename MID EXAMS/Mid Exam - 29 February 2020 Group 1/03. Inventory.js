function foo(input) {
    let inventory = input.shift().split(', ');

    class Commands {
        constructor(command , item){
            this.command = command;
            this.item = item;
        }
    }
    let command = input.map(x =>{
        let [ command, item ] = x.split(' - ');
        let currentCommand = new Commands( command, item );
        return currentCommand;
    })

    command.some(x=>{
        if(x.command === 'Collect'){
            if(!inventory.includes(x.item)){
                inventory.push(x.item);
            }
        }else if(x.command === 'Drop'){
            if(inventory.includes(x.item)){
                inventory = inventory.filter( (inventory) => inventory !== x.item);
            }
        }else if(x.command === 'Combine Items'){
            combine(x.item);
        }else if(x.command === 'Renew'){
            renew(x.item);
        }
    })

    console.log(inventory.join(', ')); 

    function combine(x) {
        let [ oldItem, newItem ] = x.split(':');
        if(inventory.includes(oldItem)){
            let index = inventory.indexOf(oldItem);
            inventory.splice(index + 1, 0, newItem);
        }
    }
    function renew(x) {
        if(inventory.includes(x)){
            let renew = x;
            inventory = inventory.filter(inventory => inventory !== x);
            inventory.push(x);
        }
    }

}

foo([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
foo([ 'Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);
