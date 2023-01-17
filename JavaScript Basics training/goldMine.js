function goldMine(input) {
    let totalLocations = Number(input[0])
   
    let index = 1;
    let average = Number(input[1])
    index++
    let totalDays = Number(input[2])
    let minePerDay = 0;
    let currentInput = Number(input[index])
    let totalMinePerDay = 0;
    let notEnough = 0;

    for (let i = 1; i <= totalLocations; i++) {
        for (let k = 1; k <= totalDays; k++) {
            index++
            currentInput = Number(input[index])
            minePerDay+=currentInput
            
        }
        totalMinePerDay = minePerDay / totalDays
        if (totalMinePerDay >= average){
            console.log(`Good job! Average gold per day: ${totalMinePerDay.toFixed(2)}`)
        } else {
            notEnough = average - totalMinePerDay
            console.log(`You need ${notEnough.toFixed(2)} gold.`)
        }
        minePerDay = 0;
        index++
        average = Number(input[index])
        index++
        totalDays = Number(input[index])
    }


}
goldMine(["1",
"5",
"3",
"10","1",
"3"])