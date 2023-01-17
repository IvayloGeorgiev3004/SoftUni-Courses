function happyCatParking(input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let tax = 0;
    let totalTax = 0;
    let daysCounter = 0;

    for (let i = 1; i <= days; i++) {
        daysCounter++
        for (let j = 1; j <= hoursPerDay; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                tax += 2.50;
            } else if (i % 2 !== 0 && j % 2 == 0) {
                tax += 1.25;
            } else {
                tax += 1;
            }
        }
        console.log(`Day: ${daysCounter} - ${tax.toFixed(2)} leva`)
        totalTax += tax
        tax = 0;
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`)


}
happyCatParking([5, 2])

// За всеки четен ден и нечетен час, паркингът таксува 2.50 лева.
// Във всеки нечетен ден и четен час таксата е 1.25 лева,
//във всички останали случаи се заплаща 1 лев. Таксуването става на всеки изминал час от деня.