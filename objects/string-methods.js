let name = ' Marysia Budzanowska       '

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abcdpassword123'
console.log(password.includes('password'))

console.log(name.trim())

let isPasswordValid = function (password) {
    return password.length >= 8 && !password.includes('password')
}

console.log(isPasswordValid('12v'))
console.log(isPasswordValid('12vpassword'))
console.log(isPasswordValid('12345678'))