function cinema(input) {
    let cinemaType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalRows = rows * columns
    let price = 0;

    switch (cinemaType) {
        case "Premiere":
            price = totalRows * 12.00;
            break;
        case "Normal":
            price = totalRows * 7.50;
            break;
        case "Discount":
            price = totalRows * 5.00;
            break;

    }
    console.log(price.toFixed(2) + " leva")
}
cinema(["Normal", "21", "13"])