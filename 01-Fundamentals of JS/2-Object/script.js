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

// Add new property
obj.city = "Lahore";
console.log(obj.city);

// Delete property
delete obj.city;
console.log(obj.city); 

// Freeze the object value
Object.freeze(obj);

// Seal the object value
Object.seal(obj);