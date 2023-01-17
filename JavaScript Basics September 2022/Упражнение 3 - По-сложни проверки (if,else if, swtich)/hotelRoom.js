function hotelRoom(input) {
    let month = input[0];
    let stayDuration = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            if (stayDuration > 14) {
                apartmentPrice = (apartmentPrice * stayDuration) * 0.90;
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            } else {
                apartmentPrice = apartmentPrice * stayDuration;
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            }
            if (stayDuration > 7 && stayDuration < 14) {
                studioPrice = (studioPrice * stayDuration) * 0.95
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else if (stayDuration > 14) {
                studioPrice = (studioPrice * stayDuration) * 0.70
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else {
                studioPrice = studioPrice * stayDuration;
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }

            break;
        case 'June':
        case 'September':
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (stayDuration > 14) {
                apartmentPrice = (apartmentPrice * stayDuration) * 0.90;
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            } else {
                apartmentPrice = apartmentPrice * stayDuration;
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            }
            if (stayDuration > 14) {
                studioPrice = (studioPrice * stayDuration) * 0.80
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else {
                studioPrice = studioPrice * stayDuration;
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }
            break;
        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            if (stayDuration > 14) {
                apartmentPrice = (apartmentPrice * stayDuration) * 0.90;
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            } else if (stayDuration <= 14) {
                apartmentPrice = stayDuration * 77.00;
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
            }
            console.log(`Studio: ${(studioPrice * stayDuration).toFixed(2)} lv.`)
            break;
    }
}

hotelRoom(["May", "5"]);
