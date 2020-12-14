function foo(input) {
    let date = [];
    let dates = null;
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
    while((dates = pattern.exec(input)) !== null){
        let day = dates.groups['day'];
        let month = dates.groups['month'];
        let year = dates.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
foo(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);