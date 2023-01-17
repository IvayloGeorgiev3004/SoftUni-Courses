function hotelRoom2(input) {

    let month = input[0];
    let stayDuration = Number(input[1]);

    let studioPrice;
    let apartmentPrice;

    if (month === "May" || month === "October") {
        studioPrice = 50 * stayDuration;
        apartmentPrice = 65 * stayDuration;
            if(stayDuration > 7 && stayDuration <= 14){
                studioPrice = studioPrice * 0.95;
            } else if(stayDuration > 14){
                studioPrice = studioPrice * 0.70;
            }

    } else if (month === "September" || month === "June") {
        studioPrice = 75.20 * stayDuration;
        apartmentPrice = 68.70 * stayDuration;
            if(stayDuration > 14){
                studioPrice = studioPrice * 0.80;
            }
    } else if (month === "July" || month === "August") {
        studioPrice = 76.00 * stayDuration;
        apartmentPrice = 77.00 * stayDuration
    }

    if (stayDuration > 14){
        apartmentPrice = apartmentPrice * 0.90;
    }

console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)

}
hotelRoom2(["August", "20"])