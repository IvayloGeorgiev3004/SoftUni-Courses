function townsToJSON(array) {
  let arrayOfTowns = [];

  let [town, latitude, longitude] = array[0].split(/\s*\|\s*/g).slice(1, -1);

  for (let i = 1; i < array.length; i++) {
    let [name, latitudeValue, longitudeValue] = array[i].split(/\s*\|\s*/g).slice(1, -1);
    latitudeValue = Number(parseFloat(latitude).toFixed(2));
    longitudeValue = Number(parseFloat(longitude).toFixed(2));
    const townObject = {};
    townObject[town] = name;
    townObject[latitude] = latitudeValue;
    townObject[longitude] = longitudeValue;

    arrayOfTowns.push(townObject);
  }

  return JSON.stringify(arrayOfTowns);
}
townsToJSON(["|Town|Latitude|Longitude |", "| Sofia | 42.696552 | 23.32601 |", "| Beijing | 39.913818 | 116.363625 |"]);
