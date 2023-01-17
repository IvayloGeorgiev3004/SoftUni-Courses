function pets (input){

    let daysNumber= Number (input[0]);
    let totalFood = Number (input[1]);

    let dogFood = 0;
    let catFood = 0;
    let biscuits = 0;
    let catFoodForBonus = 0;
    let dogFoodForBonus = 0;
    let addedBiscuit = 0;


    for (let i = 2; i < input.length; i++){
        let index = Number (input[i]);


        if (i % 2 !== 0 ){
            catFood += index;
         } else if (i % 2 === 0 ){
            dogFood += index;
        }  
        


    
    } for (let i=6; i <input.length; i+=6 ){
        dogFoodForBonus = Number(input [i])
        catFoodForBonus = Number(input [i+1])
        
        biscuits = Number(Math.ceil((( catFoodForBonus + dogFoodForBonus)* 0.10) + addedBiscuit));
        addedBiscuit+=biscuits
        }

    
    let allEatenFood =dogFood+catFood ;
    let allEatenFoodPercent = allEatenFood/totalFood *100;
    let dogPercent = (dogFood /allEatenFood) *100;
    let catPercent = (catFood /allEatenFood) *100;
    
 

 console.log(`Total eaten biscuits: ${Math.ceil(biscuits)}gr.`);
 console.log(`${allEatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
 console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
 console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);


}


pets((["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35",
"100",
"30",
"110",
"25",
"120",
"35"]))