
// --------> Problem 1 <-------

function radianToDegree(radian){
    if (typeof radian === 'number'){
        const degree = radian * 57.2951;
        console.log(parseFloat(degree.toFixed(2)));
        return degree;
    }
    else{
        console.log('Program Requires a Number')
    }
}



// --------> Problem 2 <-------

function isJavaScriptFile(str){

    if(typeof str === 'string'){
        console.log(str.endsWith('.js'));
    }
    else{
        console.log('Input Requires String')
    }
}



// --------> Problem 3 <-------

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    if (typeof dieselQuantity && typeof petrolQuantity && typeof octaneQuantity === 'number'){
        const perLitreDiesel = 114;
        const perLitrePetrol = 130;
        const perLitreOctane = 135;

        let dieselPrice = dieselQuantity * perLitreDiesel;
        let petrolPrice = petrolQuantity * perLitrePetrol;
        let octanePrice = octaneQuantity * perLitreOctane;

        let subTotal = dieselPrice + petrolPrice + octanePrice;
        console.log(subTotal);
        return subTotal;
    }
    else{
        console.log('Invalid Data Type');
    }

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




