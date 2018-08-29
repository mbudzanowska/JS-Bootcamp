/* const myAge = 22
const message = myAge >= 18 ? 'you can vote' : 'you can`t vote'
console.log(message) */

const myAge = 12
const showPage = () => 'Showing the page'
const showErrorPage = () =>  'Showing the error page'
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Tyler', 'Porter', 'Tyler', 'Porter']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')