function foo(input) {
    let reservationList = input.slice(0, input.indexOf('PARTY'));
    let commingGuests = input.slice(input.indexOf('PARTY') + 1);
    let guestList = generateGuest(reservationList);
    commingGuests.forEach( x => {
        let check = !isNaN(Number(x[0]));
        let list = check ? 'vip' : 'regular'
        let currentGuest = guestList[list].find( o => o.guest === x);
            currentGuest.isHere = true;
    })
    let vip = guestList.vip.filter( o => !o.isHere);
    let regular = guestList.regular.filter( o => !o.isHere);
    console.log(vip.length + regular.length);
    vip.concat(regular).forEach( x => { console.log(x.guest) })
    
    function generateGuest(array) {
        let object = {
            vip: [],
            regular: [],
        }
        array.forEach(guest => {
            let guestObj = {guest, isHere: false }
            if(!isNaN(Number(guest[0]))){   object.vip.push(guestObj)   }
            else { object.regular.push(guestObj) }
        });
        return object;
    }
}

foo(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);