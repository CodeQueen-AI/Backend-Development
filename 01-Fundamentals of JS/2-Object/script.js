// 2-Objects
var obj = {
    name : 'CodeQueen',
    age : 17
}

// Access the object value
console.log(obj.name);    
console.log(obj['name']);

// Change the object value
obj.age = 25;              
console.log(obj.age);      

// Freeze the object value
Object.freeze(obj);

// Seal the object value
Object.seal(obj);