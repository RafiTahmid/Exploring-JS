
// --------> Problem 1 <-------

function radianToDegree(radian){
    degree = radian * 57.29;
    return Math.round(degree);
}



// --------> Problem 2 <-------

function isJavaScriptFile(myFile){
    console.log(myFile.endsWith('.js'));
}



// --------> Problem 3 <-------

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    const perLitreDiesel = 114;
    const perLitrePetrol = 130;
    const perLitreOctane = 135;

    dieselPrice = dieselQuantity * perLitreDiesel;
    petrolPrice = petrolQuantity * perLitrePetrol;
    octanePrice = octaneQuantity * perLitreOctane;

    subTotal = dieselPrice + petrolPrice + octanePrice;

    return subTotal;

}


// --------> Problem 4 <-------

function publicBusFare(passengers){
    
    const remainderOf50 = passengers % 50;
    const remainderOf11 = remainderOf50 % 11;
    
    if (typeof passengers === 'number'){
        if (remainderOf11 % 11 != 0){
            fare = remainderOf11 * 250;
            console.log(fare);
            return fare;
            
        }
    }
    else{
        console.log ('Invalid Input Data type');
    }
    
}


// --------> Problem 5 <-------

function isBestFriend (friend1, friend2){
    if(typeof friend1 && typeof friend2 ==='object'){
        if(friend1. name === friend2. friend && friend2. name === friend1. friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        console.log('Program requires objects');
    }
}




