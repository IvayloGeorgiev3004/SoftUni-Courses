function burgerBus(array) {
    let numberOfCities = Number(array.shift())
    let profit = 0;
    let expenses = 0;
    let moneyEarnedPerCity = 0;
    let totalMoneyEarned = 0
    let cityCounter = 0;


    for (let i = 0; i < array.length; i += 3) {
        cityCounter++
        let currentCity = array[i]
        profit = Number(array[i + 1])
        expenses = Number(array[i + 2])

        if (cityCounter % 3 === 0) {
            if (cityCounter % 5 !== 0) {
                expenses = expenses * 1.50;
            }

        }
        if (cityCounter % 5 === 0) {
            profit *= 0.90
        }

        moneyEarnedPerCity = (profit - expenses)
        console.log(`In ${currentCity} Burger Bus earned ${moneyEarnedPerCity.toFixed(2)} leva.`)
        totalMoneyEarned += moneyEarnedPerCity;

    }

    console.log(`Burger Bus total profit: ${totalMoneyEarned.toFixed(2)} leva.`)

}
burgerBus(["5",

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

    "290.20"])





