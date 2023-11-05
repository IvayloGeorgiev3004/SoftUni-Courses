function townsToJSON(array) {

    for (input of array){
        if(input.includes(" |") || input.includes("|") || input.includes("| ") || input.includes(" | ") ){
            debugger
        }
    }



    for (let i = 0; i < array.length; i++) {
        let townObj = {}
        let matched = array[i].match(regex)
        debugger
        if (i === 0) {
            matched.forEach(element => {
                townObj[element] = null
            });
        } else {

            let [townName, latitude, longitude] = matched
            latitude = parseFloat(latitude).toFixed(2)
            longitude = parseFloat(longitude).toFixed(2)
            latitude = Number(latitude)
            longitude = Number(longitude)
            townObj.Town = townName
            townObj.Latitude = latitude
            townObj.Longitude = longitude
            finalArr.push(townObj)
        }

    }

    console.log(JSON.stringify(finalArr))

}



// // // townsToJSON(['| Town | Latitude | Longitude |',
// // //     '| Sofia | 42.696552 | 23.32601 |',
// // //     '| Beijing | 39.913818 | 116.363625 |'])

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])




    // function parseTable(input) {
    //     // Extract column names from the first row
    //     let [town, latitude, longitude] = input[0].split(/\s*\|\s*/).filter(Boolean);
    
    //     // Initialize an array to store the objects
    //     let result = [];
    
    //     // Process each row from the second element onwards
    //     for (let i = 1; i < input.length; i++) {
    //         // Extract data from the current row
    //         let [townValue, latitudeValue, longitudeValue] = input[i].split(/\s*\|\s*/).filter(Boolean);
    
    //         // Parse latitude and longitude to numbers with 2 decimal places
    //         let latitudeParsed = Number(Number(latitudeValue).toFixed(2));
    //         let longitudeParsed = Number(Number(longitudeValue).toFixed(2));
    
    //         // Create an object and push it to the result array
    //         let obj = {};
    //         obj[town] = townValue;
    //         obj[latitude] = latitudeParsed;
    //         obj[longitude] = longitudeParsed;
    //         result.push(obj);
    //     }
    
    //     // Return the array of objects as JSON
    //     return JSON.stringify(result);
    // }