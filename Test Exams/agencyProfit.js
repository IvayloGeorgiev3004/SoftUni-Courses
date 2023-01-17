function agencyProfit(input) {
    let planeCompanyName = input[0];
    let adultTickets = Number(input[1]);
    let kidTickets = Number(input[2]);
    let pricePerAdultTicket = Number(input[3]);
    let tax = Number(input[4]);

    let kidsPrice = pricePerAdultTicket * 0.30;

    let adultPriceAndTax = pricePerAdultTicket + tax;
    let kidsPriceAndTax = kidsPrice + tax;

    let totalTicketsPrice = (kidTickets * kidsPriceAndTax) + (adultTickets * adultPriceAndTax)
    let revenue = totalTicketsPrice * 0.20;

    console.log(`The profit of your agency from ${planeCompanyName} tickets is ${revenue.toFixed(2)} lv.`)


}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])