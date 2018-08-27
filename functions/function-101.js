let greetUser = function () {
    console.log('Welcome, user!');
}

greetUser();
greetUser();
greetUser();



let square = function (num) {
    let result = num * num;
    console.log('in function: '+ result);
    return result;
}

let val_3 = square(3);
let val_10 = square(10);

console.log('result val_3: ' + val_3);
console.log('result val_10: ' + val_10);


let convertFarenheitToCelcius = function(farenheit) {
    let celcius = (farenheit - 32) * 5 / 9;
    return celcius;
}

let celc_res = convertFarenheitToCelcius(100);
console.log(celc_res);