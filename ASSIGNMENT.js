
// --------> Problem 1 <-------

function radianToDegree(radian){
    degree = radian * 57.29;
    return Math.round(degree);
}
// radianToDegree(1);
// console.log(degree);


// --------> Problem 2 <-------

function isJavaScriptFile(myFile){
    console.log(myFile.endsWith('.js'));
}
// isJavaScriptFile('index.js');


// --------> Problem 3 <-------

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    const perLitreDiesel = 114;
    const perLitrePetrol = 130;
    const perLitreOctane = 135;

    dieselPrice = dieselQuantity * perLitreDiesel;
    petrolPrice = petrolQuantity * perLitrePetrol;
    octaneprice = octaneQuantity * perLitreOctane;

    subTotal = dieselPrice + petrolPrice + octaneprice;

    return subTotal;

}


