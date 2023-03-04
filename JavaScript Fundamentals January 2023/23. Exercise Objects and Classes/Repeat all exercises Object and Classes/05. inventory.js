function inventory(arrayInventory) {
    let heroesArray = []

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items
        }
    }
    for (let Heroes of arrayInventory) {
        let [heroName, heroLevel, heroItems] = Heroes.split(" / ")
        let hero = new Hero(heroName, heroLevel, heroItems)
        heroesArray.push(hero)
    }
    let sortedHeroes = heroesArray.sort((el1, el2) => el1.level - el2.level)

    sortedHeroes.forEach(element => {
        console.log(`Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.items}`)
        // console.log(`level => ${element.level}`)
        // console.log(`items => ${element.items}`)
    })
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])