function cinemaTickets(input) {
    let studentTicketCounter = 0;
    let kidTicketCounter = 0;
    let standardTicketCounter = 0;
    let totalTicketsCounter = 0;
    let currentTicket = ""
    let currentTicketCounter = 0;

    let index = 0;
    let currentMovie = input[index]

    while (currentMovie !== "Finish") {
        index++
        let SeatsForTheMove = Number(input[index]);
        for (let i = 1; i <= SeatsForTheMove; i++) {
            index++
            totalTicketsCounter++
            currentTicket = input[index]
            if (currentTicket === "End") {
                totalTicketsCounter--
                break;
            }
            switch (currentTicket) {
                case "standard": standardTicketCounter++; currentTicketCounter++; break;
                case "student": studentTicketCounter++; currentTicketCounter++; break;
                case "kid": kidTicketCounter++; currentTicketCounter++; break;
            }

        }
        console.log(`${currentMovie} - ${((currentTicketCounter / SeatsForTheMove) * 100).toFixed(2)}% full.`)
        currentTicketCounter = 0
        index++
        currentMovie = input[index]
    }
    totalTicketsCounter = standardTicketCounter + studentTicketCounter + kidTicketCounter
    console.log(`Total tickets: ${totalTicketsCounter}`)
    console.log(`${((studentTicketCounter / totalTicketsCounter) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardTicketCounter / totalTicketsCounter) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidTicketCounter / totalTicketsCounter) * 100).toFixed(2)}% kids tickets.`)

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])