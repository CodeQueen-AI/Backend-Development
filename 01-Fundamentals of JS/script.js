



// 3-Functions
function greet(){
    console.log('Hello CodeQueen');
}
greet()

// Arguments & Parameters
function greet(name) {   // parameter
    console.log("Hello " + name);
}
greet("CodeQueen");      // argument

// Return Value
function abcd(){
    return "Hello Wrold!";
}
var ans = abcd()

// Arrow Function
const greet = () => {
    console.log("Hello");
};

greet();
 
// Function Length
function add(a, b, c){
    return a + b + c
}
consolelog(add.length)

// 4-Asynchronous Javascript Coding
async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results);
    console.log(ans.results[0].name); 
}

abcd();