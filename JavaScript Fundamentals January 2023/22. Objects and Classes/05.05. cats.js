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

    for (let i = 0; i < array.length; i++) {
        let [name, age] = array[i].split(" ")
        let newCat = new Cat(name, age)
        newCat.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])