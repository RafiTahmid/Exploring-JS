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

publicBusFare('x')

