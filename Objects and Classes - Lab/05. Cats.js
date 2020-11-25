function foo(input) {

    class Cat {
        constructor(name, age){
            this.name = name,
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = input.map(x =>{
        let [name, ageText] = x.split(' ');
        let cat = new Cat(name, Number(ageText)); 
        return cat;
    })
    cats.forEach(x => x.meow());
}

foo(['Mellow 2', 'Tom 5']);