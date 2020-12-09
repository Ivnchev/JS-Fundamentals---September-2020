function foo(input) {
    const obj = {}
    const words = input.toLowerCase(input).split(' ');
    words.forEach(x => {
        const counted = words.filter(z => z === x).length
        if(counted % 2 === 1 && counted !== 0)
        obj[x] = 0;
        if(obj.hasOwnProperty(x)){
            obj[x] = counted;
        }
    });
    const sorted = Object.keys(obj).sort((a,b) => obj[b] - obj[a])
    console.log(sorted.join(' '));
}

foo('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');