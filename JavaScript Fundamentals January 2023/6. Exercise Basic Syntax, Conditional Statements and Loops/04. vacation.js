function vacation(count, type, day) {
    let price = 0;

    switch (day) {
        case "Friday":
            switch (type) {
                case "Students":
                    price = count * 8.45;
                    if (count >= 30) {
                        price *= 0.85
                    }
                    break;
                case "Business":
                    price = count * 10.90;
                    if (count >= 100) {
                        price = (count - 10) * 10.90
                    }
                    break;
                case "Regular":
                    price = count * 15;
                    if (count >= 10 && count <= 20) {
                        price *= 0.95;
                    }
                    break;
            }
            break;
        case "Saturday":
            switch (type) {
                case "Students":
                    price = count * 9.80;
                    if (count >= 30) {
                        price *= 0.85
                    }
                    break;
                case "Business":
                    price = count * 15.60;
                    if (count >= 100) {
                        price = (count - 10) * 15.60
                    }
                    break;
                case "Regular":
                    price = count * 20;
                    if (count >= 10 && count <= 20) {
                        price *= 0.95;
                    }
                    break;
            }
            break;
        case "Sunday":
            switch (type) {
                case "Students":
                    price = count * 10.46;
                    if (count >= 30) {
                        price *= 0.85
                    }
                    break;
                case "Business":
                    price = count * 16;
                    if (count >= 100) {
                        price = (count - 10) * 16
                    }
                    break;
                case "Regular":
                    price = count * 22.50;
                    if (count >= 10 && count <= 20) {
                        price *= 0.95;
                    }
                    break;
            }
            break;

    }

    console.log(`Total price: ${price.toFixed(2)}`)
}
vacation(30,

    "Students",
    
    "Sunday")