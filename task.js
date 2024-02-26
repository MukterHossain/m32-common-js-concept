

// // let first;

// function add(a, b){
//     const result = a + b;
// }
// // const result = add()

// function add1(a, b, c ,d){
//     const result = a + b + c + d;
//     // console.log(result)
//     return result;
// }
// // const result = add1(1, 2, 2)

// function noNegative(a, b){
//     if(a <0 || b < 0){

//     }
//     return a+ b;
// }
// // const result = noNegative(2, -3)


// const result  = {id: 21, name: 'masum', sid: 'pptooto'}

// const eight = undefined;
// const ninth = null;
// // console.log(typeof eight)




// // type
// let a1 = 5;
// let b1 = a1;
// b1=7;

// let sb = {name: 'Ajad Hossain'};
// let sp = sb;
// // sp = {name: 'Sarwar Hossain'}
// sp.name = 'Sarwar Hossain';

// // console.log(sb, sp)



// // True-False

// // const x = false;
// // const x = 'false';
// // const x = 0;
// // const x = '0';
// // const x = [];
// // const x = {};
// // const x =' ';
// // const x =null;
// let x =5;
// // const x;
// console.log(x)

// if(x){
//     console.log('This is truthy')
// }
// else{
//     console.log('This is falsy')
// }

// const y = null;
// if(!y){
//     console.log('I am false')
// }

// const z = 50;
// if(!!x){
//     console.log("this my truthy")
// }



// //Triple === / ==

// // const first = 5;
// // const second = 5;
// // const first = {};
// // const second ={};
// const first = {};
// const second =first;

// if(first === second){
//     console.log('your same')
// }
// else{
//     console.log('you are not same')
// }







// // scope

// function scop(a, b){
//     const total = a + b;
//     console.log(a, b)
//     if(a>10){
//         const sum = 10 + a+ b;
//         console.log(sum)
//     }
    
//     else{
//         const sum = 20 + a + b;
//         const current = sum;
//         console.log(current)
//     }
    
//     return total;
// }
// scop(5, 10)



// Closure

// function food(){
//     let mug = 0;
//     return function(){
//         mug ++ ;
//         return mug;
//     }
// }

// const eatFood = food();
// const eatFood1 = food();
// console.log(eatFood())
// console.log(eatFood1())

// console.log(eatFood1())
// console.log(eatFood1())
// console.log(eatFood1())
// console.log(eatFood1())
// console.log(eatFood1())
// console.log(eatFood1())
// console.log(eatFood())
// console.log(eatFood())
// console.log(eatFood())
// console.log(eatFood())





// callback
// function seeFood (person){
//     console.log(person)
// }
// // const s = [45, 21, 24, 25, 32, 51]
// const s = {name: 'abol', price: '21530', brand: 'CF9'}
// seeFood(s.price)

// function greeting(greetEvening, name){
//     handlerControl(name)
// }
// function handlerControl(name){
//     console.log('Hello Country', name)
// }

// function bolotNoOne(name){
//     console.log('How are you', name)
// } 
// function sunGlass(book){
//     console.log('Are you bolod', book)
// }

// greeting(handlerControl, 'tom ni')
// greeting(handlerControl, 'Cue ni')
// greeting(handlerControl, 'Tosi ni')
// greeting(handlerControl, 'Poe ni')
// greeting(bolotNoOne, 'See Book')
// greeting(sunGlass, 'Shit Book')


// function submitHandler(){
//     console.log('submit')
// }
// document.getElementById('btn-submit').addEventListener('click', submitHandler)





// arguments
// function sum(a, b, c){
//     // console.log(arguments[4])
//     const args = [...arguments]
//     console.log(args)
//     const result = a + b + c;
//     return result;
// }
// // console.log(arguments)
// const total = sum(1, 2, 3, 21, 32, 54, 102, 52)
// console.log(total)


// passby
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a= 12;
    const sum = a * b;
    return sum;
}
console.log(num1)
const total = multiply(num1, num2)
console.log(total)