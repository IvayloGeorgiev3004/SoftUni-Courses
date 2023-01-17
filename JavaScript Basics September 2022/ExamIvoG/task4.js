function task4(input) {
    let days = Number(input[0]);
    let firstDayKm = Number(input[1]);
    let goal = 1000;
    let kmPerDay = firstDayKm;
    let index = 2;
    let percentPerDay = Number(input[index])
    let totalKm = 0;

    for (let i = 1; i <= days; i++) {
        kmPerDay = kmPerDay + ((kmPerDay * percentPerDay) / 100)
        totalKm += kmPerDay
        index++
        percentPerDay = Number(input[index])
    }
    totalKm += firstDayKm;

    if (totalKm < 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(goal - totalKm)} more kilometers`);
    } else {
        console.log(`You've done a great job running ${Math.ceil(totalKm - goal)} more kilometers!`)
    }

}
task4(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])

