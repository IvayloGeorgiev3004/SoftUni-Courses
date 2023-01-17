function minutesAndSeconds(input){
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let TimeInSeconds = time1 + time2 + time3;
    let minutes = Math.floor(TimeInSeconds / 60);
    let seconds = TimeInSeconds % 60;
    
    if (seconds <= 9){
        console.log(minutes + ":" + 0 + seconds);
    } else {
        console.log(minutes + ":" + seconds);
    }

    

}
minutesAndSeconds(["55","55","55"])