function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let currentBase = 0;
    let currentStone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let rowCounter = 0
    let totalRows = 0;

    for (let i = base; base >= 1; base -= 2) {
        rowCounter++
        totalRows++

        if (base === 1 || base === 2) {
            gold +=( base * base) * increment;
            break;
        }
        if (rowCounter % 5 === 0) {
            currentBase = (base * base);
            currentStone = (base - 2) * (base - 2);
            stone += (base - 2) * (base - 2) * increment;
            lapis += (currentBase - currentStone) * increment;

        } else {
            currentBase = (base * base);
            currentStone = (base - 2) * (base - 2)
            stone += (base - 2) * (base - 2) * increment;
            marble += (currentBase - currentStone) * increment;
        }
       
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalRows * increment)}`)

}
thePyramidOfKingDjoser(11, 1)