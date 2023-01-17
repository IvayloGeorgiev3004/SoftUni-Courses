function cinemaTicketsNestedLoops(input) {
    let ticketsCounter = 0;
    let totalTicketsCounter = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let flag = false;


    let index = 0
    let movieName = input[index]
    index++
    let movieSpaces = Number(input[index])
    index++
    let ticketType = input[index]

    while (movieName !== "Finish") {
        for (let i = 1; i <= movieSpaces; i++) {
            ticketType = input[index]
            index++
            if (ticketType === "End") {
                break;
            }
            switch (ticketType) {
                case "standard": ticketsCounter++; standardTickets++; break;
                case "kid": ticketsCounter++; kidsTickets++; break;
                case "student": ticketsCounter++; studentTickets++; break;
            }
            if (ticketsCounter >= movieSpaces) {
                break;
            }

        }
        console.log(`${movieName} - ${(ticketsCounter * 100 / movieSpaces).toFixed(2)}% full.`)
        totalTicketsCounter += ticketsCounter
        ticketsCounter = 0;
        movieName = input[index]
        index++
        movieSpaces = Number(input[index])
        index++
    }
    console.log(`Total tickets: ${totalTicketsCounter}`)
    console.log(`${((studentTickets * 100) / totalTicketsCounter).toFixed(2)}% student tickets.`)
    console.log(`${((standardTickets * 100) / totalTicketsCounter).toFixed(2)}% standard tickets.`)
    console.log(`${((kidsTickets * 100) / totalTicketsCounter).toFixed(2)}% kids tickets.`)

}
cinemaTicketsNestedLoops(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])