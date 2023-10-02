function speedLimit(speed, area) {

    let speedLimit = 0;
    let isSpeeding = false;
    let speedDifference = 0;

    switch (area) {
        case "motorway": {
            speedLimit = 130;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
                speedDifference = speed - speedLimit;
            }
            break;
        }
        case "interstate": {
            speedLimit = 90;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
                speedDifference = speed - speedLimit;
            }
            break;
        }
        case "city": {
            speedLimit = 50;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
                speedDifference = speed - speedLimit;
            }
            break;
        }
        case "residential": {
            speedLimit = 20;
            if (speed <= speedLimit) {
                isSpeeding = false;
            } else {
                isSpeeding = true
                speedDifference = speed - speedLimit;
            }
            break;
        }

    }
    let speedingStatus = "";
    if (speedDifference <= 20) {
        speedingStatus = "speeding";
    } else if (speedDifference > 20 && speedDifference <= 40) {
        speedingStatus = "excessive speeding";
    } else if (speedDifference > 40) {
        speedingStatus = "reckless driving";
    }

    if (isSpeeding === true) {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`)
    } else {
        debugger
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }

}
speedLimit(120, 'interstate')

function speedLimit2(speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const limit = speedLimits[area];
    const speedDifference = speed - limit;
    const speedingStatus = speedDifference <= 20 ? "speeding" : speedDifference <= 40 ? "excessive speeding" : "reckless driving";

    if (speed > limit) {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${speedingStatus}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

speedLimit2(120, 'interstate');