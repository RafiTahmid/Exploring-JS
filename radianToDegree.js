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


radianToDegree(10);
// console.log(degree)