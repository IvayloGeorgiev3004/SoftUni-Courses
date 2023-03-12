function city(object) {
    let cityInfo = {}

    for (let key of Object.keys(object)){
        console.log(`${key} -> ${object[key]}`)
        debugger
        cityInfo[key] = object[key]
        debugger
        
    }
    console.log(cityInfo)

}
city({
    name: "Sofia",
    area: 492, population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})