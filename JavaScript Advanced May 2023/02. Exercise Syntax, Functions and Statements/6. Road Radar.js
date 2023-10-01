function speedLimit(speed, area) {

    let speedLimit = 0;
    let isSpeeding = false;

    switch (area) {
        case "motorway": {
            speedLimit = 130;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
            }
            break;
        }
        case "interstate": {
            speedLimit = 90;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
            }
            break;
        }
        case "city": {
            speedLimit = 50;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
            }
            break;
        }
        case "residential": {
            speedLimit = 20;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
            }
            break;

        }
    }
    if (isSpeeding === true) {
        //todo
    }
}
speedLimit(130, 'motorway')