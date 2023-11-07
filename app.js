// Value types (primitive types)
// Number,string,boolean,symbol,null, undefinded
let x = 10;
let y = x;
console.log(x, y);
x = 20;
console.log(x, y);
// Reference types, arrays, objects
let a = { valeur: 10 };
let b = a;
console.log(a, b);
a.valeur = 20;
console.log(a, b);
