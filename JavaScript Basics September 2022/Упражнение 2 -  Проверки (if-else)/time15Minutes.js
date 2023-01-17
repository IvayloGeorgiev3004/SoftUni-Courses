function time15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMin = (hours * 60) + minutes + 15;
    
    let totalMinLeft = totalMin % 60
    let totalHoursLeft = Math.trunc(totalMin / 60)

    if (totalMinLeft < 10)
        totalMinLeft = `0${totalMinLeft}`
    
    if (totalHoursLeft === 24)
        totalHoursLeft = 0;

    console.log(`${totalHoursLeft}:${totalMinLeft}`)

}
time15Minutes(["0", "01"])