function sum(a, b, c){    // parameter
    // console.log(arguments)
    // console.log(arguments[4])
    // console.log(typeof arguments)
    // arguments.push(45)  // not push due to argument is not array
    const args = [...arguments];    // make an array of objcet
    // console.log(args)


    const result = a + b + c;
    return result;
}
// console.log(arguments)

const total = sum(45, 89, 12, 45, 98, 56);    // argument :  array like object
console.log(total)
console.log(typeof sum)   // print : function
console.log(sum.length)   // print : parameter number


// [Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 }  // array like object