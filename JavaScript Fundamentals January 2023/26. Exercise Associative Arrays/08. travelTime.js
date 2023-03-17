function travelTime(array) {
    let countryOrdersMap = new Map()

    // array.sort((a, b) => {
    //     const
    //         aa = a.split(' > '),
    //         bb = b.split(' > ');

    //     let r = 0;
    //     [0, 1].some(i => r = aa[i].localeCompare(bb[i]));
    //     return r || bb[2] - aa[2];
    // });
    // debugger
    // array.sort((a, b) => {
    //     let newARr = []
    //     const
    //         aa = a.split(' > '),
    //         bb = b.split(' > ');
    //     newARr.push(aa)
    //     newARr.push(bb)
    //     let finalSort = []

    //     newARr.sort(([country, city, price], [country2, city2, price2]) => {
    //         finalSort = country2.localeCompare(country) || city2.localeCompare(city) || price2 - price;
    //     })
    //     return finalSort
    // })
    // debugger
    for (let commands of array) {
        let [country, townName, cost] = commands.split(" > ");
        cost = Number(cost);

        if (!countryOrdersMap.has(country)) {
            countryOrdersMap.set(country, new Map());
            countryOrdersMap.get(country).set(townName, cost)

        } else {
            let countryTown = countryOrdersMap.get(country)
            for (let test of countryTown) {
                let name = test.shift()
                let newCost = test.shift()
                if (name !== townName) {
                    countryOrdersMap.get(country).set(townName, cost)
                } else {
                    let finalCost = Math.min(cost, newCost)
                    countryOrdersMap.get(country).set(townName, finalCost)
                }
            }
        }

    }
    let sortedEntries = [...countryOrdersMap].sort(([name, map], [name2, map2]) => {
        return name.localeCompare(name2)

    })
    for (let [name, innerMap] of sortedEntries) {
        let iterableInnerMap = [...innerMap]
        let sortedInnerMap = iterableInnerMap.sort(([city, price], [city2, price2]) => {
            return price - price2;
        })
        let cityAndPrice = ""
        for (let [cityName, price] of sortedInnerMap) {
            cityAndPrice += `${cityName} -> ${price} `
        }
        console.log(`${name} -> ${cityAndPrice}`)

    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Lovech > 200"
])


