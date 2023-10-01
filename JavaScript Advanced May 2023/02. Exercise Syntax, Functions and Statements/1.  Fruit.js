function getFruit(fruit, grams, price) {
    let weightInKg = grams / 1000
    let moneyNeeded = weightInKg * price;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)

}
getFruit('orange', 2500, 1.80)
getFruit('apple', 1563, 2.35)