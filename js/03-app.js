// 3. Concatenar un String y Template Strings
const documento = 'Certificado de Antecedentes ';
const precio = '$300 Pesos';

// concadenar dos string en un string
console.log("concat: " + documento.concat(precio));
console.log("El " + documento + precio);
// , incluye un espacio de separación
console.log("El:" , documento , precio);

// Template String o Template Literal. JS ECMA script 6
// Backtick ``
console.log(`el ${documento} cuesta ${precio}`);