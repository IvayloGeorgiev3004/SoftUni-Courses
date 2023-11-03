function createStorageCatalogue(array) {
    // Step 1: Initialize an empty object to store products categorized by their first letters
    let catalogueObject = {};

    // Step 2: Loop through the input array and split each string into a product name and price
    for (let product of array) {
        let [productName, productPrice] = product.split(" : ");
        let currCapitalLetter = productName[0]; // Get the first letter of the product name

        // Step 3: Categorize products by their first letters in catalogueObject
        if (!catalogueObject.hasOwnProperty(currCapitalLetter)) {
            // If the letter is not in the catalogue, create a new object with the first key-value pair
            catalogueObject[currCapitalLetter] = {
                [productName]: Number(productPrice),
            };
        } else {
            // If the letter is in the catalogue, add a new key-value pair to the existing object
            catalogueObject[currCapitalLetter][productName] = Number(productPrice);
        }
    }

    // Step 4: Sort the keys (first letters) of catalogueObject alphabetically
    let sortedKeys = Object.keys(catalogueObject).sort();

    // Step 5: Create a new object with sorted product names within each category
    let finalObj = {};
    for (let key of sortedKeys) {
        let storedValues = catalogueObject[key];
        // Sort the product names alphabetically within each category
        let sortedValues = Object.entries(storedValues).sort();
        finalObj[key] = sortedValues;
    }

    // Step 6: Print the sorted products
    for (let capitalLetter in finalObj) {
        console.log(capitalLetter);
        for (let value of finalObj[capitalLetter]) {
            console.log("  " + value[0] + ": " + value[1]);
        }
    }
}

// Step 7: Call the function with sample input
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

function createStorageCatalogue(array) {
    let catalogueObject = {};

    for (let product of array) {
        let [productName, productPrice] = product.split(" : ");
        let firstLetter = productName[0].toUpperCase();

        if (!catalogueObject[firstLetter]) {
            catalogueObject[firstLetter] = [];
        }

        catalogueObject[firstLetter].push({ name: productName, price: Number(productPrice) });
    }

    // Sort the product names within each category
    for (let key in catalogueObject) {
        catalogueObject[key].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Sort categories (first letters) alphabetically
    let sortedCategories = Object.keys(catalogueObject).sort();

    // Print the sorted products
    for (let category of sortedCategories) {
        console.log(category);
        for (let product of catalogueObject[category]) {
            console.log(`  ${product.name}: ${product.price}`);
        }
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