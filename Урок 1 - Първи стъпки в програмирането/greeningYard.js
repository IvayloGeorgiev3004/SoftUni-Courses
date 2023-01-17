function yardGreening(input){
    let price = Number(7.61);
    let squareArea = price * input[0]
    let discount = squareArea * 0.18
    let res = squareArea - discount
    console.log(`The final price is: ${res} lv.`)
    console.log(`The discount is: ${discount} lv.`)

    }
yardGreening(["550"]);

function greenHouse (input){
    let price = Number(7.61)
    let squareFeet = input[0] * price
    let discount = squareFeet *0.18;
    let res1 = squareFeet - discount
    console.log("The final price is: " + res1 + " lv.");
    console.log ("The discount is: " + discount + " lv.")
}
greenHouse(["150"])