/* function amazingNumbers(number) {
    number = String(number);
    let sum = 0;
    let sum2 = ""
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
    }
    sum = String(sum);

    for (let i = 0; i < sum.length; i++) {
        sum2 = String(sum[i])
    }
    if (sum2 === "9") {
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }

}
amazingNumbers("999") */

function amazingNumbers2(number) {
    number = String(number);
    let sum = 0;
    let sum2 = ""
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
    }
  let finalResult = sum.toString().includes("9")
  console.log(finalResult ? `${number} Amazing? True` : `${number} Amazing? False`)

}
amazingNumbers2("111111111")