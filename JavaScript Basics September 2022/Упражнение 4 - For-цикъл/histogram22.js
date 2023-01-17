function histogram22(input) {
    let num1 = Number(input[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i < input.length; i++) {
        let allNumbers = Number(input[i])
        if (allNumbers < 200) {
            p1Counter++
        } else if (allNumbers <= 399) {
            p2Counter++
        } else if (allNumbers <= 599) {
            p3Counter++
        } else if (allNumbers <= 799) {
            p4Counter++
        } else if (allNumbers >= 800) {
            p5Counter++
        }
    }
    console.log(`${((p1Counter / num1) * 100).toFixed(2)}%`)
    console.log(`${((p2Counter / num1) * 100).toFixed(2)}%`)
    console.log(`${((p3Counter / num1) * 100).toFixed(2)}%`)
    console.log(`${((p4Counter / num1) * 100).toFixed(2)}%`)
    console.log(`${((p5Counter / num1) * 100).toFixed(2)}%`)

}
histogram22(["7",

    "800",

    "801",

    "250" , "199", "399" , "599"])