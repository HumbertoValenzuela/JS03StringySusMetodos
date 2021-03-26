// 5. String Methods - Replace, Slice y Substring

const ingredientes = 'Salsa de Tomate Pomarola';

// Replace una palabra del string
console.log( ingredientes.replace('Pomarola', 'San Jose') );
console.log( ingredientes.replace('Pomarola', 'San Jose').replace('Tomate', 'tomeito') );

//  .slice para cortar
console.log( ingredientes.slice(0, 10) );

//Alternativa a slice
console.log( ingredientes.substring(0, 10) );
// numero mayor al principio y menor al final
// substring los da vuelta automaticamente
console.log( ingredientes.substring(10, 0) );

// mostrar un caracter
console.log( ingredientes.charAt(0) );