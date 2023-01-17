function timeAdd15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    
    let hoursInMinutes = 60 * hours;
    let totalHours = hoursInMinutes + minutes + 15;
    let finalMinutes = totalHours % 60;
    let finalHours = Math.floor(totalHours /60)
 
    if (finalMinutes <=9){
        finalMinutes = `0${finalMinutes}`
    } 
     if (finalHours === 24){
        finalHours = 0
    }
 
    console.log(`${finalHours}:${finalMinutes}`)
 
}
timeAdd15Minutes(["66","566"])