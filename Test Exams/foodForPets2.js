function foodForPets2(input) {
    let totalDays = Number(input[0]);
    let totalFood = Number(input[1]);
    let biscuitsEaten = 0;
    let dogFood = 0;
    let catFood = 0;
    let totalDogFoodEaten = 0;
    let totalCatFoodEaten = 0;

    let currentDay = 0;

    for (let i = 2; i < input.length; i++) {
        dogFood = Number(input[i])
        totalDogFoodEaten += dogFood

        i++
        currentDay++
        catFood = Number(input[i])
        totalCatFoodEaten += catFood

        if (currentDay % 3 === 0) {
            biscuitsEaten += (dogFood + catFood) / 10;
        }

    }
    let totalFoodEaten = totalCatFoodEaten + totalDogFoodEaten;

    console.log(`Total eaten biscuits: ${Math.floor(biscuitsEaten)}gr.`);
    console.log(`${((totalFoodEaten * 100) / totalFood).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalDogFoodEaten * 100) / totalFoodEaten).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalCatFoodEaten * 100) / totalFoodEaten).toFixed(2)}% eaten from the cat.`);

}
foodForPets2(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
