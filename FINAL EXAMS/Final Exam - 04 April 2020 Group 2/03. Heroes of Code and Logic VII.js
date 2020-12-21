function foo(input) {
    
    let obj = input.splice(0, input.shift())
        .map(x => x.split(' ').map( x => isNaN(x) ? x : Number(x)))
        .reduce( (a,[x,y,z]) => {
            a[x] = { hp: y, mp: z }
            return a 
        },{})
    let list = {
        CastSpell(hero, mp ,s) { 
            if(obj[hero].mp >= mp) { obj[hero].mp -= mp; return `${hero} has successfully cast ${s} and now has ${obj[hero].mp} MP!`} 
            return `${hero} does not have enough MP to cast ${s}!`
        },
        TakeDamage(hero, dmg, enemy) {
            if(obj[hero].hp > dmg) { obj[hero].hp -= dmg; return `${hero} was hit for ${dmg} HP by ${enemy} and now has ${obj[hero].hp} HP left!` }
            delete obj[hero]
            return `${hero} has been killed by ${enemy}!`
        },
        Recharge(hero , a) {
            if(obj[hero].mp + a > 200){
                a = 200 - obj[hero].mp
            }
            obj[hero].mp += a
            return `${hero} recharged for ${a} MP!`
        },
        Heal(hero, a) {
            if(obj[hero].hp + a > 100){
                a = 100 - obj[hero].hp
            }
            obj[hero].hp += a
            return `${hero} healed for ${a} HP!`
        },
    }
    input.slice(0, input.indexOf('End'))
        .map( x => x.split(' - ').map(x => isNaN(x) ? x : Number(x)))
        .forEach(([cmd, a,b,c]) => { console.log( list[cmd](a,b,c) ) });
    Object.entries(obj).sort( (a,b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]))
        .forEach( x => { console.log(`${x[0]}\n  HP: ${x[1].hp}\n  MP: ${x[1].mp}`); });
}

foo(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])

foo(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])