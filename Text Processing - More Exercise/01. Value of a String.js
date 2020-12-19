function foo(input) {
    let str = input.shift()
    let cmd = input.shift()
    let m = /\w/g
    cmd === 'UPPERCASE' ? console.log(`The total sum is: ${upper(str)}`) 
            : console.log(`The total sum is: ${lower(str)}`)
    function upper(str) {
        let arr = str.match(m)
                    .map(x => Number(x.charCodeAt()))
                        .filter(z => z >= 65 && z <= 90)
                        .reduce((a,b) => Number(a) + Number(b))
        return arr
    }
    function lower(str) {
        let arr = str.match(m)
                    .map(x => Number(x.charCodeAt()))
                        .filter(z => z >= 97 && z <= 122)
                        .reduce((a,b) => Number(a) + Number(b))
        return arr
    }
}
foo([ 'AC/DC', 'UPPERCASE', '' ])
foo([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ])
