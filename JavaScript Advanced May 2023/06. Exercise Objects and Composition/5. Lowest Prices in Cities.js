function findLowestPrice(array) {
    let delimiter = " | ";
    let products = new Array();
   let obj = {};
    for (let i = 0; i < array.length; i++) {
        let [townName, product, price] = array[i].split(delimiter);
        price = Number(price);
        if (!products.includes(product)) {
            products.push(product);
        }
      
        
    }

    debugger;
}
findLowestPrice([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
