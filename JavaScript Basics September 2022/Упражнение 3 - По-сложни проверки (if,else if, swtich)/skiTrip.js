function skiTrip(input) {
    let nights = Number(input[0] - 1);
    let vacationRoomType = input[1];
    let feedback = input[2];

    let price = 0;

    if (nights < 10) {
        switch (vacationRoomType) {
            case "room for one person":
                price = nights * 18;
                break;
            case "apartment":
                price = (nights * 25) * 0.70;
                break;
            case "president apartment":
                price = (nights * 35) * 0.90;
                break;
        }

    } else if (nights >= 10 && nights <= 15) {

        switch (vacationRoomType) {
            case "room for one person":
                price = nights * 18;
                break;
            case "apartment":
                price = (nights * 25) * 0.65;
                break;
            case "president apartment":
                price = (nights * 35) * 0.85;
                break;
        }
    } else {
        switch (vacationRoomType) {
            case "room for one person":
                price = nights * 18;
                break;
            case "apartment":
                price = (nights * 25) * 0.50;
                break;
            case "president apartment":
                price = (nights * 35) * 0.80;
                break;
        }
    }
    switch (feedback) {
        case "positive":
            price = price * 1.25;
            break;
        case "negative":
            price = price * 0.90;
            break;
    }
    console.log(price.toFixed(2));
}
skiTrip(["2", "apartment", "positive"])