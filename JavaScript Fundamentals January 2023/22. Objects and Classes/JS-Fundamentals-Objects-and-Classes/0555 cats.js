function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    array.forEach(element => {
        let [name, age] = element.split(` `)
        let cat = new Cat(name, age)
        cat.meow()
    });

}
cats(['Mellow 2', 'Tom 5'])