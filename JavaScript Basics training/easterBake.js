function easterBake(input) {
    let easterBreadCount = Number(input[0]);
    let sugar = 950;
    let flour = 750;
    let totalSugar = 0;
    let totalFlour = 0;
    let index = 1;

    let maxUsedSugar = Number.MIN_SAFE_INTEGER;
    let maxUsedFlour = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= easterBreadCount; i++) {
        let usedSugar = Number(input[index]);
        totalSugar += usedSugar;
        if (usedSugar > maxUsedSugar) {
            maxUsedSugar = usedSugar;
        }
        index++;
        let usedFlour = Number(input[index]);
        totalFlour += usedFlour;
        if (usedFlour > maxUsedFlour) {
            maxUsedFlour = usedFlour;
        }
        index++;
    }
    let finalResultSugar = Math.ceil(totalSugar / sugar);
    let finalResultFlour = Math.ceil(totalFlour / flour);

    console.log(`Sugar: ${finalResultSugar}`);
    console.log(`Flour: ${finalResultFlour}`);
    console.log(
        `Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`
    );
}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);

if ((a = 6)) {
    if ((b = 6)) {
        if ((c = 6)) {
        }
    }
}
