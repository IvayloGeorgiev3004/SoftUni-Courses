function worldTour(array) {
    let plannedStops = array.shift();
    let index = 0;
    let tokens = array[index]
    while (tokens !== "Travel") {
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
                debugger;
                let stringToFind = commands[0];
                let replaceString = commands[1];
                switchString(stringToFind, replaceString);
                console.log(plannedStops)
                break;
        }
        index++
        tokens = array[index];
    }

    console.log(`Ready for world tour! Planned stops: ${plannedStops}`)

    function addStop(index, string) {
        if (index >= 0 && index < plannedStops.length) {
            return plannedStops = plannedStops.substring(0, index) + string + plannedStops.substring(index, plannedStops.length)
        }
    }
    function removeStop(startIndex, endIndex) {
        if (startIndex >= 0 && startIndex < plannedStops.length && endIndex > 0 && endIndex < plannedStops.length) {
            return plannedStops = plannedStops.substring(0, startIndex) + plannedStops.substring(endIndex + 1, plannedStops.length)
        }
    }
    function switchString(oldString, newString) {
        if (plannedStops.includes(oldString)) {
            let stringToAdd = plannedStops.split(oldString)
            return plannedStops = stringToAdd.join(newString)
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
