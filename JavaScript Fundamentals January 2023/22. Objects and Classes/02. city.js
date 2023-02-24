function city(object){

    // console.log(Object.keys(object))
    // console.log(Object.entries(object))

    for (values of Object.entries(object)){
        console.log(values)
    }
    console.log(`--------------------------------`)
    for (values of Object.keys(object)){

        debugger
        console.log(object[values])

        debugger
    }
    console.log(`--------------------------------`)
    for (values of Object.values(object)){
        console.log(values)
    }

}
city({

    name: "Sofia",
    
    area: 492,population: 1238438, country: "Bulgaria", postCode: "1000" })