let convertFarenheitToCelcius = function(farenheit) {
    let celcius = (farenheit - 32) * 5 / 9;
    return celcius;
}

let tempOne = convertFarenheitToCelcius(32);
let tempTwo = convertFarenheitToCelcius(100);

console.log(tempOne);
console.log(tempTwo);
