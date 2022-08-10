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

oilPrice(1,2,1);
console.log(subTotal)