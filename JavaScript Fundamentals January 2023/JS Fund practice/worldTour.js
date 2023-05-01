function worldTour(array) {
    let plannedStops = array.shift();

    for (let tokens of array) {
        let commands = tokens.split(":");
        let command = commands.shift()
        switch (command) {
            case "Add Stop":
                let index = Number(commands[0])
                let stringToInsert = commands[1]
                addStop(index, stringToInsert);
                console.log(plannedStops)
                break;
            case "Remove Stop":
                let startIndex = Number(commands[0]);
                let endIndex = Number(commands[1]);
                removeStop(startIndex, endIndex);
                console.log(plannedStops)
                break;
            case "Switch":
                //TODO
                break;
        }
    }

    function addStop(index, string) {
        if (index >= 0 && index <= plannedStops.length) {
            return plannedStops = plannedStops.substring(0, index) + string + plannedStops.substring(index, plannedStops.length)
        }
    }
    function removeStop(startIndex, endIndex) {
        if (startIndex >= 0 && startIndex <= plannedStops.length && startIndex < endIndex && endIndex > 0 && endIndex <= plannedStops.length) {
            return plannedStops = plannedStops.substring(0, startIndex) + plannedStops.substring(endIndex+1, plannedStops.len)
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])