function findLowestPrice(array) {
    // Define the delimiter used to split the input strings
    let delimiter = " | ";
    // Initialize an empty object to store the lowest prices for each product
    let obj = {};

    // Iterate over each string in the input array
    for (let i = 0; i < array.length; i++) {
        // Split the current string into name, product, and price using the delimiter
        let [name, product, price] = array[i].split(delimiter);
        // Parse the price as a number
        price = Number(price);

        // Check if the product is not already in the 'obj' object
        if (!obj.hasOwnProperty(product)) {
            // If not, create a new entry with the product as the key
            // and an object containing the name and price as its properties
            obj[product] = { name, price };
        } else {
            // If the product is already in 'obj', compare the prices
            if (price < obj[product].price) {
                // If the current price is lower, update the stored price and name for the product
                obj[product].price = price;
                obj[product] = { name, price };
            }
        }
    }

    for (let [key, values] of Object.entries(obj)) {
        // Output the product, lowest price, and corresponding name
        console.log(`${key} -> ${values.price} (${values.name})`);
    }
}
findLowestPrice([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
]);

// function findLowestPrice(array) {
//     let delimiter = " | ";
//     let obj = {};

//     for (let i = 0; i < array.length; i++) {
//         let [name, product, priceStr] = array[i].split(delimiter);
//         let price = Number(priceStr);

//         if (!obj.hasOwnProperty(product) || obj[product].price > price) {
//             obj[product] = {
//                 name: name,
//                 price: price,
//             };
//         }
//     }

//     for (let [key, values] of Object.entries(obj)) {
//         console.log(`${key} -> ${values.price} (${values.name})`);
//     }
// }
// findLowestPrice([
//     "Sofia City | Audi | 100000",
//     "Sofia City | BMW | 100000",
//     "Sofia City | Mitsubishi | 10000",
//     "Sofia City | Mercedes | 10000",
//     "Sofia City | NoOffenseToCarLovers | 0",
//     "Mexico City | Audi | 1000",
//     "Mexico City | BMW | 99999",
//     "Mexico City | Mitsubishi | 10000",
//     "New York City | Mitsubishi | 1000"
// ]);
