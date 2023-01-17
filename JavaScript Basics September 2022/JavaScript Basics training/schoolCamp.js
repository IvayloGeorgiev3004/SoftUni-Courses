function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentCount = Number(input[2]);
    let nightsCounts = Number(input[3]);

    let price = 0;
    let sport = "";

    switch (groupType) {
        case "boys":
        case "girls":
            if (season === "Winter") {
                price = nightsCounts * studentCount * 9.60;
            } else if (season === "Spring") {
                price = nightsCounts * studentCount * 7.20;
            } else if (season === "Summer") {
                price = nightsCounts * studentCount * 15
            }
            break;
        case "mixed":
            if (season === "Winter") {
                price = nightsCounts * studentCount * 10.00;
            } else if (season === "Spring") {
                price = nightsCounts * studentCount * 9.50;
            } else if (season === "Summer") {
                price = nightsCounts * studentCount * 20
            }
            break;
    }

    if (groupType === "girls") {
        switch (season) {
            case 'Winter': sport = "Gymnastics"; break;
            case 'Spring': sport = "Athletics"; break;
            case 'Summer': sport = "Volleyball"; break;
        }
    } else if (groupType === "boys") {
        switch (season) {
            case 'Winter': sport = "Judo"; break;
            case 'Spring': sport = "Tennis"; break;
            case 'Summer': sport = "Football"; break;
        }

    } else if (groupType === "mixed") {
        switch (season) {
            case `Winter`: sport = "Ski"; break;
            case `Spring`: sport = "Cycling"; break;
            case `Summer`: sport = "Swimming"; break;
        }

    }
    if (studentCount >= 50) {
        price = price / 2;
    } else if (studentCount >= 20) {
        price = price * 0.85;
    } else if (studentCount >= 10) {
        price = price * 0.95;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`)
}


schoolCamp(['Spring',
    'girls',
    20,
    7])