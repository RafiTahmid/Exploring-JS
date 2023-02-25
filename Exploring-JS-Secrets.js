var names = ["Superman", "Batman", "Spiderman", "Ironman", "Antman"]

// names.forEach(function(name){
//     console.log(name);
// })

// names.forEach(toPrint);

// function toPrint (name){
//     console.log(name);
// }

function operation(a, b, callback){
    var c = a + b;
    var d = a-b;

    callback(c, d)
}

function toPrint(c, d){
    console.log(c, d);
}

function multiply(c, d){
    console.log(c * d);
}

operation(20, 10, toPrint)
operation(20, 10, multiply)