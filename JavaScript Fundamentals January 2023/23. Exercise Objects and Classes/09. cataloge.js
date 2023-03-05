function catalogue(array) {
    // let finalArray = []
    let productsCatObj = {}
    // class Product {
    //     constructor(name, price) {
    //         this.name = name;
    //         this.price = price;
    //     }
    // }
    for (let products of array) {
        let [name, price] = products.split(" : ")
        // let product = new Product(name, price)
        // let finalCatalogue = {
        //     name,
        //     price: Number(price),
        // }
        productsCatObj[name] = Number(price);
    }
    // let sortedCatalogue = Object.keys(finalCatalogue).sort((a,b)=> a.localeCompare(b))
    //   debugger

 let sortedKeys = Object.keys(productsCatObj).sort((a,b) => a.localeCompare(b))

//    for (let i = 0; i<finalArray.length;i++){
//     let c = finalArray[i].name[0].toUpperCase();
//     if (finalCatalogueObject[c] && finalCatalogueObject[c].length >= 0){
//         finalCatalogueObject[c].push(finalArray[i]);
//         debugger
//     }
//   else {
//     finalCatalogueObject[c] = [];
//     finalCatalogueObject[c].push(finalArray[i]);
//   }
//    }
//    console.log(finalCatalogueObject)
//    debugger

    let groupChar = "";

    for (let key of sortedKeys){
        // let name = key;
        if (groupChar !== key[0]){
            groupChar = key[0]
            console.log(groupChar.toUpperCase())
        }
        console.log(`  ${key}: ${productsCatObj[key]}`)
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)


// var cities = [
//     { id: 1, slug: "abakan", name: "Абакан" },
//     { id: 4, slug: "almetevsk", name: "Альметьевск" },
//     { id: 11, slug: "barnaul", name: "Барнаул" },
//     { id: 10, slug: "astrahan", name: "Астрахань" }
//   ];
  
//   cities.sort(function(a, b) {
//     return a.slug[0].localeCompare(b.slug[0]);
//   });
  
//   var newCities = {};
  
//   for (var i = 0; i < cities.length; i++) {
//     var c = cities[i].slug[0].toUpperCase();
//     if (newCities[c] && newCities[c].length >= 0)
//       newCities[c].push(cities[i]);
//     else {
//       newCities[c] = [];
//       newCities[c].push(cities[i]);
//     }
//   }
  
//   console.log(newCities);