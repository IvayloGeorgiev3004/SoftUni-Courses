function trekkingMania222(input) {
    let groupCount = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    let totalPeople = 0
    let totalPeopleInGroup = 0;

    for (let i = 1; i < input.length; i++) {
        let groupOfPeople = Number(input[i])
        totalPeople += groupOfPeople
        if (groupOfPeople <= 5) {
            group1 += groupOfPeople;
        } else if (groupOfPeople <= 12) {
            group2 += groupOfPeople;
        } else if (groupOfPeople <= 25) {
            group3 += groupOfPeople;
        } else if (groupOfPeople <= 40) {
            group4 += groupOfPeople;
        } else {
            group5 += groupOfPeople;
        }

    }

    console.log(((group1 / totalPeople) * 100).toFixed(2) + "%");
    console.log(((group2 / totalPeople) * 100).toFixed(2) + "%");
    console.log(((group3 / totalPeople) * 100).toFixed(2) + "%");
    console.log(((group4 / totalPeople) * 100).toFixed(2) + "%");
    console.log(((group5 / totalPeople) * 100).toFixed(2) + "%");
}
trekkingMania222(["5",

    "25",

    "41",

    "31",

    "250",

    "6"])