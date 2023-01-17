function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let groupsOfPeople = 0;
    let totalCounter = 0;

    let firstCounter = 0;
    let secondCounter = 0;
    let thirdCounter = 0;
    let forthCounter = 0;
    let fifthCounter = 0;

    for (i = 1; i <= groupsCount; i++) {
        groupsOfPeople = Number(input[i])
        totalCounter += groupsOfPeople;
        if (groupsOfPeople <= 5) {
            firstCounter += groupsOfPeople;
        } else if (groupsOfPeople <= 12) {
            secondCounter += groupsOfPeople;
        } else if (groupsOfPeople <= 25) {
            thirdCounter += groupsOfPeople;
        } else if (groupsOfPeople <= 40) {
            forthCounter += groupsOfPeople;
        } else {
            fifthCounter += groupsOfPeople;
        }

    }
    console.log(((firstCounter / totalCounter) * 100).toFixed(2) + "%");
    console.log(((secondCounter / totalCounter) * 100).toFixed(2) + "%");
    console.log(((thirdCounter / totalCounter) * 100).toFixed(2) + "%");
    console.log(((forthCounter / totalCounter) * 100).toFixed(2) + "%");
    console.log(((fifthCounter / totalCounter) * 100).toFixed(2) + "%");


}
trekkingMania(["5",

    "25",

    "41",

    "31",

    "250",

    "6"])