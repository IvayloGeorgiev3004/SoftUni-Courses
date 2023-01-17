function vacationSale(input) {
    let seaVacations = Number(input[0]);
    let mountainVacations = Number(input[1]);

    let seaVacationPrice = 680;
    let mountainVacationPrice = 499;

    let finalPrice = 0;

    let currentVacationType = ""

    for (let i = 2; i < input.length; i++) {
        currentVacationType = input[i];
        if (currentVacationType === "Stop") {
            break;
        }
        switch (currentVacationType) {
            case "sea": seaVacations--;
                if (seaVacations < 0) {
                    finalPrice = finalPrice;
                    seaVacations = 0
                } else {
                    finalPrice += seaVacationPrice
                }
                break;
            case "mountain": mountainVacations--;
                if (mountainVacations < 0) {
                    finalPrice = finalPrice;
                    mountainVacations = 0;
                } else {
                    finalPrice += mountainVacationPrice
                }
                break;
        }
        if (mountainVacations === 0 && seaVacations === 0) {
            break;
        }
    }
    if (mountainVacations === 0 && seaVacations === 0) {
        console.log(`Good job! Everything is sold. Profit: ${finalPrice} leva.`)
    } else {
        console.log(`Profit: ${finalPrice} leva.`)
    }


}
vacationSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])