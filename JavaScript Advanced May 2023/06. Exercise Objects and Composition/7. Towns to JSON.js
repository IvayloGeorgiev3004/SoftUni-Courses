    function parseTable(input) {
        // Extract column names from the first row
        let [town, latitude, longitude] = input[0].split(/\s*\|\s*/).filter(Boolean);
    
        // Initialize an array to store the objects
        let result = [];
    
        // Process each row from the second element onwards
        for (let i = 1; i < input.length; i++) {
            // Extract data from the current row
            let [townValue, latitudeValue, longitudeValue] = input[i].split(/\s*\|\s*/).filter(Boolean);
    
            // Parse latitude and longitude to numbers with 2 decimal places
            let latitudeParsed = Number(Number(latitudeValue).toFixed(2));
            let longitudeParsed = Number(Number(longitudeValue).toFixed(2));
    
            // Create an object and push it to the result array
            let obj = {};
            obj[town] = townValue;
            obj[latitude] = latitudeParsed;
            obj[longitude] = longitudeParsed;
            result.push(obj);
        }
    
        // Return the array of objects as JSON
        return JSON.stringify(result);
    }