function createAssemblyLine() {
    // Return an object with methods for adding functionalities to a car object
    return {
        // Method for adding climate control functionality to the car object
        hasClima(object) {
            // Add temp and tempSettings properties to the car object
            object.temp = 21;
            object.tempSettings = 21;

            // Add adjustTemp method to the car object to adjust temperature
            object.adjustTemp = function () {
                // If current temperature is less than tempSettings, increase temperature
                if (this.temp < this.tempSettings) {
                    this.temp++;
                }
                // If current temperature is greater than tempSettings, decrease temperature
                else if (this.tempSettings < this.temp) {
                    this.temp--;
                }
                // If current temperature is equal to tempSettings, do nothing
            };
        },

        // Method for adding audio system functionality to the car object
        hasAudio(object) {
            // Add currentTrack property to the car object
            object.currentTrack = null;

            // Add nowPlaying method to the car object to display currently playing track
            object.nowPlaying = function () {
                // If there is a current track, log the track information
                if (this.currentTrack) {
                    console.log(
                        `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
                    );
                }
            };
        },

        // Method for adding parktronic system functionality to the car object
        hasParktronic(object) {
            // Add checkDistance method to the car object to detect obstacles and beep accordingly
            object.checkDistance = function (distance) {
                // Based on the distance, log appropriate beep messages
                if (distance < 0.1) console.log("Beep! Beep! Beep!");
                else if (distance < 0.25) console.log("Beep! Beep!");
                else if (distance < 0.5) console.log("Beep!");
            };
        },
        hasMaxSpeed(object) {
            object.maxSpeed = function (speed, type) {
                return `The MAX speed is ${speed} ${type} for this ${object.make} ${object.model}`;
                // object.maxSpeed = result;
            };
        },
    };
}

// Create an assembly line by calling the createAssemblyLine function
const assemblyLine = createAssemblyLine();

// Create a car object
const myCar = {
    make: "Toyota",
    model: "Avensis",
};

// Enhance the car object with climate control functionality
assemblyLine.hasClima(myCar);
console.log(myCar.temp); // Outputs: 21
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp); // Outputs: 20

// Enhance the car object with audio system functionality
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: "Never Gonna Give You Up",
    artist: "Rick Astley",
};
myCar.nowPlaying(); // Outputs: Now playing 'Never Gonna Give You Up' by Rick Astley

// Enhance the car object with parktronic system functionality
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4); // Outputs: Beep!
myCar.checkDistance(0.2); // Outputs: Beep! Beep!

// Log the modified car object with added functionalities
console.log(myCar);
assemblyLine.hasMaxSpeed(myCar);
console.log(myCar.maxSpeed(200, "km/h"));
