function lowestPrices(array) {
  const finalObjList = {};
  const separator = " | ";

  for (let list of array) {
    let [townName, product, price] = list.split(separator);
    price = Number(price);
    if (!finalObjList.hasOwnProperty(product)) {
      finalObjList[product] = {price, townName};
    } else {
      if (finalObjList[product].price > price) {
        finalObjList[product].price = price;
        finalObjList[product].townName = townName;
      }
    }
  }

  for (let entries of Object.entries(finalObjList)) {
    let productName = entries[0];
    let [productPrice, townName] = Object.values(entries[1]);
    console.log(`${productName} -> ${productPrice} (${townName})`);
  }
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

