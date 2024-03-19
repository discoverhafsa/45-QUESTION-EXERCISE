let ordinalNumber:number[] =[1,2,3,4,5,6,7,8,9];
ordinalNumber.forEach(ordinalNumber => {
    let suffix = "th";
    if(ordinalNumber === 1){
        suffix = "st"
    } else if (ordinalNumber === 2){
        suffix = "nd"
    } else if (ordinalNumber === 3){
        suffix = "rd"
    } else if (ordinalNumber === 4){
        suffix = "th"
    } else if(ordinalNumber === 5){
        suffix = "th"
    } else if (ordinalNumber === 6){
        suffix = "th"
    } else if (ordinalNumber === 7){
        suffix = "th"
    } else if(ordinalNumber === 8){
        suffix = "th"
    } else if (ordinalNumber === 9){
        suffix = "th"
    }
    console.log(`${ordinalNumber}${suffix}`);
});