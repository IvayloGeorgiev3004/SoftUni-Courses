function carWash(array) {
    let value = 10;
    array = array.slice(1)

    for (commands of array) {
        switch (commands) {
            case "soap": value += 10; break;
            case "water": value *= 1.20; break;
            case "vacuum cleaner": value *= 1.25; break;
            case "mud": value *= 0.90;
        }
    }
    return `The car is ${value.toFixed(2)}% clean.`

}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])