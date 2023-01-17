function animalType(input) {
    let animalType = input[0];

    if (animalType === "dog") {
        console.log('mammal');
    } else if (animalType === "crocodile" || animalType === "tortoise" || animalType === "snake") {
        console.log('reptile');
    } else {
        console.log('unknown');
    }

}
animalType(["snake"])

function animalTypeSwitch(input) {
    let animalType = input[0];

    switch (animalType) {
        case "dog":
            console.log('mammal');
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log('reptile');
            break;
        default:
            console.log("unknown")


    }

}
animalTypeSwitch(["snake"])