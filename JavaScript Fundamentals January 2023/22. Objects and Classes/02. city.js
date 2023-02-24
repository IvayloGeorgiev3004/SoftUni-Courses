function city(object) {

    // console.log(Object.keys(object))
    // console.log(Object.entries(object))
    // console.log(Object.values(object))

    for (values of Object.keys(object)) {
        console.log(`${values} -> ${object[values]}`)
    }

}
city({

    name: "Sofia",

    area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"
})