function onTimeForExam2(input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivingHours = Number(input[2]);
    let arrivingMinutes = Number(input[3]);

    let totalExamMinutes = Math.floor(examHours * 60) + examMinutes;
    let totalArrivingMinutes = Math.floor(arrivingHours * 60) + arrivingMinutes;

    let difference = 0;
    let hours = 0;
    let minutes = 0;

    if (totalArrivingMinutes > totalExamMinutes) {
        console.log("Late");
    } else if ((totalArrivingMinutes === totalExamMinutes) || ((totalExamMinutes - totalArrivingMinutes) <= 30) && (totalExamMinutes - totalArrivingMinutes) >= 0) { // =?
        console.log("On time");
    } else {
        console.log("Early");                 // totalExamMinutes - totalArrivingMinutes - за подраняване
        // totalArrivingMinutes - totalExamMinutes - за закъсняване
    }

    if ((totalExamMinutes - totalArrivingMinutes) < 60 && (totalExamMinutes - totalArrivingMinutes) > 0) {
        difference = totalExamMinutes - totalArrivingMinutes;
        console.log(`${difference} minutes before the start`)
    } else if ((totalExamMinutes - totalArrivingMinutes) >= 60) { 
        difference = totalExamMinutes - totalArrivingMinutes;
        hours = Math.floor(difference / 60);
        minutes = difference % 60
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`)
        } else {
            console.log(`${hours}:${minutes} hours before the start`)
        }
    } else if ((totalArrivingMinutes - totalExamMinutes) < 60 && (totalArrivingMinutes - totalExamMinutes) > 0) { 
        difference = totalArrivingMinutes - totalExamMinutes;
        console.log(`${difference} minutes after the start`)
    } else if (((totalArrivingMinutes - totalExamMinutes) >= 60 && (totalArrivingMinutes - totalExamMinutes) > 0)) {
        difference = totalArrivingMinutes - totalExamMinutes;
        hours = Math.floor(difference / 60);
        minutes = difference % 60
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`)
        } else {
            console.log(`${hours}:${minutes} hours after the start`)
        }
    }

}
onTimeForExam2(["22", "00", "23", "00"])