function coffeeLover(array) {
    let coffeeTypes = array.shift().split(" ")
    // let totalCommandsToExecute = Number(array.shift())

    for (let commands of array) {
        commands = commands.split(" ")
        let command = commands.shift()
        switch (command) {
            case "Include": let coffeeToAdd = commands.shift();
                addCoffeeAtTheEnd(coffeeToAdd); break;
            case "Remove": let firstOrLast = commands.shift(); let numbsToRemove = Number(commands.shift());
                removeFirstOrLastCoffee(firstOrLast, numbsToRemove); break;
            case "Prefer": let index1 = Number(commands.shift()); let index2 = Number(commands.shift());
                coffeeSwitchIndex(index1, index2); break;

            case "Reverse": coffeeTypes = coffeeTypes.reverse(); break;

        }

    }

    console.log(`Coffees:`)
    console.log(coffeeTypes.join(" "))

    function addCoffeeAtTheEnd(coffee) {
        coffeeTypes.push(coffee)
    }

    function removeFirstOrLastCoffee(firstOrLast, number) {
        if (number < coffeeTypes.length) {
            switch (firstOrLast) {
                case "first": coffeeTypes.splice(0, number); break;
                case "last": coffeeTypes.splice(coffeeTypes.length - number, coffeeTypes.length - 1)
            }
        }
    }

    function coffeeSwitchIndex(index, index2) {
        if (coffeeTypes[index] !== undefined && coffeeTypes[index2] !== undefined) {
            coffeeTypes[index2] = coffeeTypes.splice(index, 1, coffeeTypes[index2])[0]; //TO CHECK
        }


    }

}
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",

    "5",

    "Include OrdinaryCoffee",

    "Remove first 1",

    "Prefer 0 1",

    "Prefer 3 1",

    "Reverse"])