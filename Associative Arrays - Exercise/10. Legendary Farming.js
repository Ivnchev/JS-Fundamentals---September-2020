function foo(input){
    let obj = {
        'key' : {
            'shards' : 0,
            'fragments' : 0,
            'motes': 0
        },
        'junk': {},
    }
    let item = {
        'shards' : 'Shadowmourne',
        'fragments' : 'Valanyr',
        'motes': 'Dragonwrath',
    }
    let data = input.split(' ').map(x => isNaN(x)? x.toLowerCase() : Number(x))
    for (let i = 0; i < data.length; i+=2) {
        let material = data[i+1]
        let qty = data[i]
        if(material === 'shards' || material === 'fragments' || material === 'motes'){
            obj.key[material] += qty
            if(obj.key[material] >= 250){
                obj.key[material] -= 250
                console.log(`${item[material]} obtained!`);
                break;
            }
        }else {
            if(obj.junk[material] === undefined){ obj.junk[material] = 0;}
            obj.junk[material] += qty
        }   
    }
    Object.entries(obj.key).sort((a,b) => {
        if(b[1] - a[1] !== 0) {  return b[1] - a[1] }
        else { return a[0].localeCompare(b[0])}
    }).forEach(x => { console.log(`${x[0]}: ${x[1]}`); });
    Object.entries(obj.junk).sort((a,b) => { return a[0].localeCompare(b[0]) })
            .forEach(x => { console.log(`${x[0]}: ${x[1]}`); });
}
foo('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
foo('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')