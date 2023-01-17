function careForPuppy(input) {
    let dogFoodKg = Number(input[0]);
    let totalDogFood = dogFoodKg * 1000
    let index = 1;
    let currentInput = input[index]
    let foodEaten = 0;
    let foodForCurrentDay = 0;

    while (currentInput !== "Adopted") {
        foodForCurrentDay = Number(input[index])
        foodEaten += foodForCurrentDay
        index++
        currentInput = input[index]
    }
    if (foodEaten <= totalDogFood) {
        console.log(`Food is enough! Leftovers: ${totalDogFood - foodEaten} grams.`)
    } else {
        console.log(`Food is not enough. You need ${foodEaten - totalDogFood} grams more.`)
    }
}
careForPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])

