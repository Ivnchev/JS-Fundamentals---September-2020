function foo(input) {
    let heroes = [];
    input.forEach(el => {
        const data = el.split(' / ');
        const name = data[0];
        const lvl = Number(data[1]);
        const items = data[2].split(', ').sort((a,b) =>a.localeCompare(b));

        heroes.push({ name , lvl , items })
    });
    heroes.sort((a,b) =>a.lvl - b.lvl);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.lvl}\nitems => ${hero.items.join(', ')}`);
    });
}
foo([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );