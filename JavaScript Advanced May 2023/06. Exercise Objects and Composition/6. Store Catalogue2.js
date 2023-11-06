function createStorageCatalogue(arrayOfProducts) {
  const catalogueObject = {};

  for (let product of arrayOfProducts) {
    let catalogueUpperChar = product[0];
    product = product.replace(" :", ":");
    if (!catalogueObject.hasOwnProperty(catalogueUpperChar)) {
      catalogueObject[catalogueUpperChar] = [product];
    } else {
      let currArr = catalogueObject[catalogueUpperChar];
      currArr.push(product);
    }
  }

  let sortedValues = Object.values(catalogueObject);
  for (let sort of sortedValues) {
    let upperCase = sort[0][0];
    let sorted = sort.sort();
    catalogueObject[upperCase] = sorted;
  }

  for (let result of Object.entries(catalogueObject).sort()) {
    console.log(result[0]);
    result[1].forEach((element) => console.log("  " + element));
  }
}
createStorageCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);


function createStorageCatalogue(arrayOfProducts) {
    const catalogueObject = {};

    arrayOfProducts.forEach(product => {
        const [name, price] = product.split(' : ');
        const firstLetter = name[0].toUpperCase();

        if (!catalogueObject[firstLetter]) {
            catalogueObject[firstLetter] = [];
        }
        catalogueObject[firstLetter].push(`${name}: ${parseFloat(price)}`);
    });

    const sortedCatalogue = {};
    Object.keys(catalogueObject).sort().forEach(key => {
        sortedCatalogue[key] = catalogueObject[key].sort();
    });

    for (const [key, value] of Object.entries(sortedCatalogue)) {
        console.log(key);
        value.forEach(product => console.log(`  ${product}`));
    }
}

// createStorageCatalogue([
//     "Appricot : 20.4",
//     "Fridge : 1500",
//     "TV : 1499",
//     "Deodorant : 10",
//     "Boiler : 300",
//     "Apple : 1.25",
//     "Anti-Bug Spray : 15",
//     "T-Shirt : 10",
//   ]);