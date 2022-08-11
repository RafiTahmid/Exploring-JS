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

oilPrice(0,2,3);
// console.log(subTotal)