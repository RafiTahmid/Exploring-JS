// function functionName(parameters/arguments){
//     function body
//     return
// }

// var returnValue  = functionName(parameter value)
// console returnValue


function getAverage(asaign1, assign2, assign3){
    var total = asaign1 + assign2 + assign3;
    var average = total / 3;

    return average;

}

var returnValue1 = getAverage(10, 15, 20);
var returnValue2 = getAverage(2, 4, 6);
var returnValue3 = getAverage(3, 6, 9);
console.log("Assignment Average: ",returnValue1);
console.log("Assignment Average: ",returnValue2);
console.log("Assignment Average: ",returnValue3);