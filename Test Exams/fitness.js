function fitnessCard(input) {
    let fitnessSum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let totalSum = 0;

    switch (sport) {
        case "Gym":
            if (gender === "m") {
                if (age <= 19) {
                    fitnessSum -= 42 * 0.8;
                } else {
                    fitnessSum -= 42;
                }
            } else {
                if (age <= 19) {
                    fitnessSum -= 35 * 0.8;
                } else {
                    fitnessSum -= 35;
                }
            }
            break;
        case "Boxing":
            if (gender === "m") {
                if (age <= 19) {
                    fitnessSum -= 41 * 0.8;
                } else {
                    fitnessSum -= 41;
                }
            } else {
                if (age <= 19) {
                    fitnessSum -= 37 * 0.8;
                } else {
                    fitnessSum -= 37;
                }
            }
            break;
        case "Yoga":
            if (gender === "m") {
                if (age <= 19) {
                    fitnessSum -= 45 * 0.8;
                } else {
                    fitnessSum -= 45;
                }
            } else {
                if (age <= 19) {
                    fitnessSum -= 42 * 0.8;
                } else {
                    fitnessSum -= 42;
                }
            }
            break;

        case "Zumba":
            if (gender === "m") {
                if (age <= 19) {
                    fitnessSum -= 34 * 0.8;
                } else {
                    fitnessSum -= 34;
                }
            } else {
                if (age <= 19) {
                    fitnessSum -= 31 * 0.8;
                } else {
                    fitnessSum -= 31;
                }
            }
            break;
        case "Dances":
            if (gender === "m") {
                if (age <= 19) {
                    fitnessSum -= 51 * 0.8;
                } else {
                    fitnessSum -= 51;
                }
            } else {
                if (age <= 19) {
                    fitnessSum -= 53 * 0.8;
                } else {
                    fitnessSum -= 53;
                }
            }
            break;

        case "Pilates":
            if (gender === "m") {
                if (age <= 19) {
                    fitnessSum -= 39 * 0.8;
                } else {
                    fitnessSum -= 39;
                }
            } else {
                if (age <= 19) {
                    fitnessSum -= 37 * 0.8;
                } else {
                    fitnessSum -= 37;
                }
            }
            break;
    }
    if (fitnessSum < 0) {
        console.log(
            `You don't have enough money! You need $${Math.abs(fitnessSum).toFixed(
                2
            )} more.`
        );
    } else {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }
}