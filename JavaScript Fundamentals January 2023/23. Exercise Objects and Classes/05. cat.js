function cat(array) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let cats of array) {
        let catName = cats.split(" ").shift()
        let catAge = cats.split(" ").pop()
        catAge = Number(catAge)
        let newCat = new Cat(catName, catAge)
        newCat.meow()
    }

}
cat(['Mellow 2', 'Tom 5'])