function burgerBus(array) {
    const numberOfCities = Number(array.shift());
    let totalMoneyEarned = 0;
    let cityCounter = 0;

    for (let i = 0; i < array.length; i += 3) {
        cityCounter++;
        const currentCity = array[i];
        let profit = Number(array[i + 1]);
        let expenses = Number(array[i + 2]);

        // Adjust expenses based on cityCounter conditions
        if (cityCounter % 3 === 0) {
            if (cityCounter % 5 !== 0) {
                expenses *= 1.50;
            }
        }

        // Adjust profit based on cityCounter conditions
        if (cityCounter % 5 === 0) {
            profit *= 0.90;
        }

        const moneyEarnedPerCity = profit - expenses;
        console.log(`In ${currentCity}, Burger Bus earned ${moneyEarnedPerCity.toFixed(2)} leva.`);
        totalMoneyEarned += moneyEarnedPerCity;
    }

    console.log(`Burger Bus total profit: ${totalMoneyEarned.toFixed(2)} leva.`);
}

burgerBus([
    "5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"
]);




