function time15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalMinutes = minutes + (hours * 60);

    let totalTime = totalMinutes + 15;

    let finalHours = Math.floor(totalTime /60 );
    let finalMinutes = totalTime % 60;

    if (finalMinutes < 10){
        finalMinutes = `0${finalMinutes}`
    } 
    if (finalHours === 24){
        finalHours = 0;
    } 
    console.log(`${finalHours}:${finalMinutes}`)
}
time15Minutes(["23", "45"])