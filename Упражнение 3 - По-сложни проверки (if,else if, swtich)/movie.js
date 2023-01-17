function movies(input) {
    let projectionType = input[0];
    let rowsNumber = Number(input[1]);
    let columnsNumber = Number(input[2]);

    let totalPrice = 0;
    let totalSeats = rowsNumber * columnsNumber;

    switch (projectionType) {
        case "Premiere":
            totalPrice = totalSeats * 12.00;
            break;
        case "Normal":
            totalPrice = totalSeats * 7.50;
            break;
        case "Discount":
            totalPrice = totalSeats * 5.00;
            break;
    }
    console.log(totalPrice.toFixed(2) + " leva")
}
movies(["Normal", "21", "13"])