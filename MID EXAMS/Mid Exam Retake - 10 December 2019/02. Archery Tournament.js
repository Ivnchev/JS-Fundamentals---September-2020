function foo(input) {
    let p = 0;
    let t = input.shift().split('|').map(Number);
    input.slice(0, input.indexOf('Game over')).forEach(c => {
        let [z, x, l] = c.split('@');
        x = Number(x)
        l = Number(l)
        if(z === 'Shoot Left'){ p += sL(x, l, p, t) }
        else if(z === 'Shoot Right'){ p += sR(x, l, p, t) }
        else{ t.reverse() }
    });
    console.log(t.join(' - '));
    console.log(`Iskren finished the archery tournament with ${p} points!`);
    
    function sL(x, l, p, t) {
        p = 0;
        if(x > -1 && x <= t.length -1){
            let left = x - l
            while(left < 0){ left += t.length }
            if(t[left] >= 5){
                t[left] -= 5;
                p += 5
            } else {
                p += t[left]
                t[left] = 0
            }
        }
        return p
    }
    function sR(x, l, p, t) {
        p = 0
        if(x > -1 && x <= t.length -1){
            let right = x + l
            while(right > t.length){ right -= t.length }
            if(t[right] >= 5){
                t[right] -= 5;
                p += 5
            }else {
                p += t[right]
                t[right] = 0;
            }
        }
        return p
    }
}

foo([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
  ]);
foo([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ]);

  function foo(input) {
    let p = 0;
    let t = input.shift().split('|').map(Number);
    input.slice(0, input.indexOf('Game over')).forEach(c => {
        let [z, x, l] = c.split('@');
        x = Number(x)
        l = Number(l)
        if(z === 'Shoot Left'){ p += sL(x, l, p, t) }
        else if(z === 'Shoot Right'){ p += sR(x, l, p, t) }
        else{ t.reverse() }
    });
    console.log(t.join(' - '));
    console.log(`Iskren finished the archery tournament with ${p} points!`);
    
    function sL(x, l, p, t) {
        p = 0;
        if(x > -1 && x <= t.length -1){
            let left = x - l
            while(left < 0){ left += t.length }
            if(t[left] >= 5){
                t[left] -= 5;
                p += 5
            } else {
                p += t[left]
                t[left] = 0
            }
        }
        return p
    }
    function sR(x, l, p, t) {
        p = 0
        if(x > -1 && x <= t.length -1){
            let right = x + l
            while(right > t.length){ right -= t.length }
            if(t[right] >= 5){
                t[right] -= 5;
                p += 5
            }else {
                p += t[right]
                t[right] = 0;
            }
        }
        return p
    }
}