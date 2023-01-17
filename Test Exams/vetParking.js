function vetParking(input) {
    let totalDays = Number(input[0]);
    let totalHours = Number(input[1])
    let tax = 0;
    let totalTax = 0;
    let notEvenDay = 0;
    let evenDay = 0;
    dayTax = 0;

    let notEvenHour = 0;
    let evenHour = 0;

    for (let i = 1; i <= totalDays; i++) {
        if (i % 2 !== 0) {
            notEvenDay = 1;
        } else {
            evenDay = 1;
        }

        for (let k = 1; k <= totalHours; k++) {
            if (k % 2 !== 0) {
                notEvenHour = 1;
            } else {
                evenHour = 1
            }
            if (notEvenDay === 1 && evenHour === 1) {
                tax = 1.25
                evenHour = 0;
            } else if (evenDay === 1 && notEvenHour === 1) {
                tax = 2.50
                notEvenHour = 0;
            } else {
                tax = 1
                evenHour = 0;
                notEvenHour = 0;
            }
            dayTax += tax
            totalTax += tax

        }
        console.log(`Day: ${i} - ${dayTax.toFixed(2)} leva`)
        dayTax = 0;
        notEvenDay = 0
        evenDay = 0;
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`)
}
vetParking(["2",
    "5"])
