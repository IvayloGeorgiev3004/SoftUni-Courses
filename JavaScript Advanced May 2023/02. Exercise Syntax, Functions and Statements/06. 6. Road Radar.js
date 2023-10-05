function checkSpeeds(currSpeed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    let currSpeedLimit = speedLimits[area]; // check speed limit for current area
    let isSpeeding = false;
    let speeding = 0;

    if (currSpeed - currSpeedLimit > 0) {
        isSpeeding = true;
        speeding = currSpeed - currSpeedLimit; // set speeding to true
    }

    let speedingStatus = "";

    if (speeding) {
        if (speeding <= 20 && speeding) {
            speedingStatus = "speeding";
        } else if (speeding <= 40) {
            speedingStatus = "excessive speeding";
        } else {
            speedingStatus = "reckless driving";
        }
    }

    isSpeeding === false
        ? console.log(`Driving ${currSpeed} km/h in a ${speedLimits[area]} zone`)
        : console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimits[area]} - ${speedingStatus}`);
}
checkSpeeds(200, "motorway");
// Driving 40 km/h in a 50 zone
checkSpeeds(21, "residential");
// The speed is 1 km/h faster than the allowed speed of 20 - speeding
