function inventory(array) {

    let heroesArr = [];
    for (let commands of array) {
        let [name, level, items] = commands.split(" / ")
        level = Number(level)
        let heroes = {}
        heroes.name = name;
        heroes.level = level;
        heroes.items = items;
        heroesArr.push(heroes)
    }

    let sorted = heroesArr.sort((hero1, hero2) => hero1.level - hero2.level)
    sorted.map(heroes => {
        console.log(`Hero: ${heroes.name}\nlevel => ${heroes.level}\nitems => ${heroes.items} `)
        // console.log(`level => ${heroes.level}`)
        // console.log(`items => ${heroes.items}`)

    })

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])