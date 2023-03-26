function heroesOfCodeAndLogicVII(array) {
    let heroesArr = []
    let maxHP = 100;
    let maxMP = 200;
    let hero = ""
    let totalHeroes = Number(array.shift());
    for (let i = 0; i < totalHeroes; i++) {
        let name = array[i].split(" ").shift()
        let HP = Number(array[i].split(" ")[1])
        let MP = Number(array[i].split(" ")[2])
        let heroes = {
            name,
            HP,
            MP,
        }
        heroesArr.push(heroes)
    }
    array.splice(0, totalHeroes);
    let index = 0;
    let line = array[index]
    while (line !== "End") {
        let command = line.split(" - ");
        let action = command[0];
        switch (action) {
            case "Heal":
                hero = command[1]
                let healAmount = Number(command[2])
                heroesArr.forEach(element => {
                    if (element.name === hero) {
                        let heroHealth = element.HP;
                        let healHP = Math.min((maxHP - heroHealth), healAmount)
                        element.HP = heroHealth + healHP;
                        console.log(`${hero} healed for ${healHP} HP!`)
                    }
                })
                break;
            case "Recharge":
                hero = command[1]
                let rechargeAmount = Number(command[2])
                heroesArr.forEach(element => {
                    if (element.name === hero) {
                        let heroMana = element.MP;
                        let healMP = Math.min((maxMP - heroMana), rechargeAmount)
                        element.MP = heroMana + healMP;
                        console.log(`${hero} recharged for ${healMP} MP!`)
                    }
                })
                break;
            case "TakeDamage":
                hero = command[1];
                let damageTaken = Number(command[2])
                let attacker = command[3];
                heroesArr.forEach(element => {
                    if (element.name === hero) {
                        let heroHP = element.HP;
                        heroHP -= damageTaken;
                        if (heroHP > 0) {
                            console.log(`${hero} was hit for ${damageTaken} HP by ${attacker} and now has ${heroHP} HP left!`)
                            element.HP = heroHP;
                        } else {
                            console.log(`${hero} has been killed by ${attacker}!`)
                            let indexToRemove = heroesArr.indexOf(element);
                            heroesArr.splice(indexToRemove, 1)
                        }
                    }
                })
                break;
            case "CastSpell":
                hero = command[1];
                let MPNeeded = Number(command[2])
                let spell = command[3];
                heroesArr.forEach(element => {
                    if (element.name === hero) {
                        let heroMP = element.MP;
                        if (heroMP >= MPNeeded) {
                            heroMP -= MPNeeded
                            element.MP = heroMP
                            console.log(`${hero} has successfully cast ${spell} and now has ${heroMP} MP!`)
                        } else {
                            console.log(`${hero} does not have enough MP to cast ${spell}!`)
                        }
                    }
                })
                break;
        }
        index++
        line = array[index]
    }

    for (let heroesLeft of heroesArr) {
        console.log(`${heroesLeft.name}\n  HP: ${heroesLeft.HP}\n  MP: ${heroesLeft.MP}`)
    }
}
heroesOfCodeAndLogicVII([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])