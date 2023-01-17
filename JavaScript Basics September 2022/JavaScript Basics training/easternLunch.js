function easternLunch(input) {
    let easterBreads = Number(input[0])
    let eggs = Number(input[1]);
    let cookies = Number(input[2]);

    let easterBreadPrice = 3.20;
    let eggsPrice = 4.35; // за 12 броя
    let cookiesPrice = 5.40;
    let paintForEggsPrice = 0.15;

    let easterBreadTotal = easterBreadPrice * easterBreads
    let eggsTotal = eggs * eggsPrice;
    let cookiesTotal = cookies * cookiesPrice
    let paintForEggsTotal = (eggs * 12) * paintForEggsPrice;

    console.log((easterBreadTotal + eggsTotal + cookiesTotal + paintForEggsTotal).toFixed(2))


} easternLunch(["3",
    "2",
    "3"])