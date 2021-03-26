// 6. String Methods - Repeat y Split
const colegios = "Orione Santa Filomena";

// repeat un string, solo num enteros sino lo redondea
const texto = 'Alonso de Quintero'.repeat(2);

console.log(texto);
console.log(`${colegios} ${texto} !!!`);

// split, dividir string. retorno un array
const actividades = "Estoy aprendiendo JavaScript Moderno";
console.log(actividades.split(' ') );

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(', ') );

const tweet = "Aprendiendo #JavaScript #Moderno";
console.log(tweet.split('#') );