function foodForPets2(input) {
    let index = 0;
    let totalDays = Number(input[index]);
    index++
    let totalFood = Number(input[index]);
    index++
    let dogFood = Number(input[index]);
    index++
    let catFood = Number(input[index]);
    index++
    let biscuitsEaten = 0;
    let daysCounter = 1;

    let totalDogFoodEaten = 0;
    let totalCatFoodEaten = 0;

    for (let currentDay = 1; currentDay <= totalDays; currentDay++) {
        if (currentDay % 3 === 0) {
            biscuitsEaten += (dogFood + catFood) * 0.10
        }

        totalDogFoodEaten = totalDogFoodEaten + dogFood;
        dogFood = Number(input[index]);
        index++


        totalCatFoodEaten += catFood;
        catFood = Number(input[index]);
        daysCounter++
        index++


    }
    let totalFoodEaten = totalCatFoodEaten + totalDogFoodEaten;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsEaten)}gr.`);
    console.log(`${((totalFoodEaten * 100) / totalFood).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalDogFoodEaten / totalFoodEaten) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalCatFoodEaten / totalFoodEaten) * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPets2(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
