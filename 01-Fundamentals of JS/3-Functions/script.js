// Functions
function greet(){
    console.log('Hello CodeQueen');
}

// Calling a Function
greet()

// Parameters
function greet(name) {  
    console.log("Hello " + name);
}

// Arguments
greet("CodeQueen");      

// Return Keyword
function add(a, b) {
    return a + b;
}

let result = add(2, 3);
console.log(result);

// Default Parameters
function greet(name = "Guest") {
    console.log(name);
}

// Function Expression
var greet = function() {
    console.log("Hello");
};

// Arrow Function
const greet = () => {
    console.log("Hello");
};

// Function Length
function add(a, b, c){
    return a + b + c
}
consolelog(add.length)