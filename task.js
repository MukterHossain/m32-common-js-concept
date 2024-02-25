

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







// scope

function scop(a, b){
    const total = a + b;
    console.log(a, b)
    if(a>10){
        const sum = 10 + a+ b;
        console.log(sum)
    }
    
    else{
        const sum = 20 + a + b;
        const current = sum;
        console.log(current)
    }
    
    return total;
}
scop(5, 10)
