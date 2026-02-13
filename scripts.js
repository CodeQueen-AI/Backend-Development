// Array
let arr = [1,2,3,4];

// forEach
// arr.forEach(function(val){
//     console.log(val + " hello")
// })

// Map
// var newarr = arr.map(function(val){
//     return val*3
// })
// console.log(newarr)

// filter
arr.filter(function(val){
    if(val > 2) {return true}
    else return false;
})