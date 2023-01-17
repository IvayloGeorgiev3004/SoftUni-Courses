function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let vacationType;
    let finalSumSpend = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                vacationType = "Camp";
                finalSumSpend = budget * 0.3;
                break;
            case "winter":
                vacationType = "Hotel";
                finalSumSpend = budget * 0.7;
                break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                vacationType = "Camp";
                finalSumSpend = budget * 0.4;
                break;
            case "winter":
                vacationType = "Hotel";
                finalSumSpend = budget * 0.8;
                break;
        }
    } else {
        destination = "Europe";
        vacationType = "Hotel";
        finalSumSpend = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${finalSumSpend.toFixed(2)}`);
}
journey(["1500", "summer"]);
