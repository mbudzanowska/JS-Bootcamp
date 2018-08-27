
let temp = 312;

if(temp >= 65 && temp <= 90) {
    console.log('Temp is ok');
}

if(temp <= 0 || temp >= 90){
    console.log('Don not go outside!');
}

let guestOneVegan = true;
let guestTwoVegan = false;

if(guestOneVegan && guestTwoVegan){
    console.log('only vegan')
} else if(guestOneVegan || guestTwoVegan) {
    console.log('some vegan')
} else console.log('non vegan');

