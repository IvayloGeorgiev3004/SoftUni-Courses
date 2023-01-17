function vacationLoop(input) {
    let destination = input[0];
    let budget = Number(input[1]);
    let index = 2;
    let savings = 0;
    let currentMoney = 0;

     while (destination !== "End") {
            currentMoney = Number(input[index])
            index++
            savings += currentMoney
            if (savings >= budget) {
                console.log(`Going to ${destination}!`)
                savings = 0;
                destination = input[index]
                index++
                budget = Number(input[index])
                index++
                currentMoney = Number(input[index])
            }
        }
}
vacationLoop(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])