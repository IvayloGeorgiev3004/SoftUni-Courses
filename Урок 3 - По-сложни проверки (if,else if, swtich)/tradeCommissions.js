function tradeCommissions(input){
    let town = input[0];
    let money = Number(input[1]);

    let commission = 0;

    switch(town){
        case "Sofia":
            if(money >=0 && money<=500 ){
                commission = money * 0.05
            } else if (money > 500 && money <= 1000){
                commission = money * 0.07
            } else if (money > 1000 && money <= 10000){
                commission = money * 0.08
            } else {
                commission = money * 0.12
            }
            break;
        case "Varna":
            if(money >=0 && money<=500 ){
                commission = money * 0.045
            } else if (money > 500 && money <= 1000){
                commission = money * 0.075
            } else if (money > 1000 && money <= 10000){
                commission = money * 0.10
            } else {
                commission = money * 0.13
            }
            break;
        case "Plovdiv":
            if(money >=0 && money<=500 ){
                commission = money * 0.055
            } else if (money > 500 && money <= 1000){
                commission = money * 0.08
            } else if (money > 1000 && money <= 10000){
                commission = money * 0.12
            } else {
                commission = money * 0.145
            }
            break;
    }
    if (commission > 0){
        console.log(commission.toFixed(2))
    } else {
        console.log("error")
    }
}
tradeCommissions(["Kaspichan", "-50"])