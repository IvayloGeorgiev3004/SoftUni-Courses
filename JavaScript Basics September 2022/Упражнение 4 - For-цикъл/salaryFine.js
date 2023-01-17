function salaryFine(input) {

    let salary = Number(input[1]);
    let badWeb = 0;
    let fineCounter = 0;

    for (let i = 2; i < input.length; i++) {
        badWeb = input[i]
        switch (badWeb) {
            case "Facebook": fineCounter += 150; break;
            case "Instagram": fineCounter += 100; break;
            case "Reddit": fineCounter += 50; break;
        }
        if ((salary - fineCounter) <= 0) {
            console.log(`You have lost your salary.`)
            break;
        }
    }
    if (salary - fineCounter > 0) {
        console.log(Math.floor(salary - fineCounter))
    }
}
salaryFine(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])