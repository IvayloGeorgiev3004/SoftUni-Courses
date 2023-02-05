function orders(product, quantity){
    let result = quantity * productPrice(product)
    return result.toFixed(2);
    
    function productPrice(product){
        let prize = 0
        switch (product){
            case "coffee": prize = 1.5; break;
            case "water": prize = 1; break;
            case "coke":prize = 1.4; break;
            case "snacks": prize = 2; break;
        }
        return prize;
    }
}
orders("coffee", 2) 

