function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        catMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let arguments of array) {
        let [name, age] = arguments.split(" ")
        debugger
        let cat = new Cat(name, age)
        cat.catMeow()
        debugger
    }

}
cats(['Mellow 2', 'Tom 5'])