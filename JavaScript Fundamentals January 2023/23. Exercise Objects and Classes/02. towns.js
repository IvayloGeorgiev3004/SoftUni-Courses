function towns(array) {
    let townsInfo = {}

    for (let i = 0; i < array.length; i++) {
        let [cityName, latitude, longitude] = array[i].split(" | ")
        townsInfo.town = cityName;
        townsInfo.latitude = Number(latitude).toFixed(2);
        townsInfo.longitude = Number(longitude).toFixed(2);
        console.log(townsInfo)

    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])