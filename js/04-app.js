
// 4. Cortar Espacios en Blanco de un String
const vivienda = '    Casa de amoblada dos pisos   ';
// Eliminar espacio en blanco al inicio y termino de un String
// los espacios son considerados en un String
// lenght los cuenta como caracteres

console.log(vivienda);
// Eliminar caracteres del inicio...
console.log(vivienda.trimStart() );
// Eliminar caracteres en el fin...
console.log(vivienda.trimEnd() );

// Chaining o encadenar metodos. Son Nuevos metodos
console.log( vivienda.trimStart().trimEnd() );
// trim es antiiguo y quita espacio en inicio y fin
console.log( vivienda.trim() );