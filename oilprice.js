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

oilPrice(0,2,3);
console.log(subTotal)