function towns(arrayTownsInfo) {
    let townsInfo = {};

    arrayTownsInfo.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ')
        townsInfo.town = town;
        townsInfo.latitude = Number(latitude).toFixed(2);
        townsInfo.longitude = Number(longitude).toFixed(2);
        console.log(townsInfo)
    });
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])