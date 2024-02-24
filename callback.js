// function greeting(person){
//     console.log(person)
// }
// function greeting(greetingHandler){
//     console.log(greetingHandler())
// }
function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'Hallim mama';
// const numbers = [ 45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}
// function greetingHandler(){
//     console.log('Good Morning')
// }

function greetingHandler(name){
    console.log('Good Morning', name)
}

function greetEvening(name){
    console.log('Good Evening', name)
}
function greetNight(name){
    console.log('Good Night', name)
}

// greeting(greetingHandler)
greeting(greetingHandler, 'Tom Hanks')
greeting(greetingHandler, 'Tom Brady')
greeting(greetingHandler, 'Tom Cruise')
greeting(greetEvening, 'Tom Solaiman')
greeting(greetEvening, 'Tom Atif')
greeting(greetNight, 'Tom skjjt')
greeting(greetNight, 'Tom Sajek')

function submitHandler(){
    console.log('submit button clicked')   // call back function
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)