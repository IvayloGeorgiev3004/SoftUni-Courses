

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let totalPrice = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalPrice += helmetPrice;
        }
        if (i % 3 === 0) {
            totalPrice += swordPrice;
        }
        if (i % 6 === 0) {
            totalPrice += shieldPrice;
        }
        if (i % 12 === 0) {
            totalPrice += armourPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)

/*  • Every second lost game, his helmet is broken.
• Every third lost game, his sword is broken.
• When both his sword and helmet are broken in the same lost fight, his shield also breaks.
• Every second time, when his shield brakes, his armor also needs to be repaired.   */

function gladiatorExpenses2(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let totalPrice = 0;
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;


    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalPrice += helmetPrice;
            helmetCounter++
        }
        if (i % 3 === 0) {
            totalPrice += swordPrice;
            swordCounter++
        }
        if ((swordCounter === 2) && (helmetCounter === 3)) {
            totalPrice += shieldPrice;
            shieldCounter++
            swordCounter = 0;
            helmetCounter = 0;
        }
        if ((shieldCounter === 2)) {
            totalPrice += armourPrice
            shieldCounter = 0;
        }

    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}
gladiatorExpenses2(23,
    12.50,
    21.50,
    40,
    200)