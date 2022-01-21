// array.flat
let array=[1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//objetos entries
let entries=[['name', 'oscar'],['age',32]];
console.log(Object.fromEntries(entries));

//simbolos acceder
let mySymbl='My Symbol';
let symbol=Symbol(mySymbl)
console.log(symbol.description)