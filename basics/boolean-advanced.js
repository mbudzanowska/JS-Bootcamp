let isAccountLocked = false;
let userRole = 'not boss';

if(isAccountLocked){
    console.log('Account is locked!');
} else {
    console.log('I`ve been expecting you!');
}

if(isAccountLocked) {

} else if(userRole === 'boss') {
    console.log('Welcome boss!');
} else {
    console.log('Welcome');
}

let temp = 130;

if(temp <= 32){
    console.log('FREEZING')
} else if(temp >= 120) {
    console.log('HELL');
} else console.log('JUST RIGHT');