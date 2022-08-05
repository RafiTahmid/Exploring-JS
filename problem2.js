// Largest number.

// var a = 823;
// var b = 1279;
// var c = 9995;

// if (a > b && a > c){
//     console.log(a)
// }
// else if (b > c && b > a){
//     console.log(b)
// }
// else{
//     console.log(c)
// }


function findLargest(num1, num2, num3){
    if(num1 > num2 && num1 > 3){
        console.log(num1);
    }

    else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }

    else{
        console.log(num3);
    }


} 

findLargest(2,3,4);
findLargest(2,6,4);
findLargest(9,3,4);