const numeros = [1, 2, 3, 4, 5];

// Duplicar os valores com map
const duplicados = numeros.map((num) => num * 2);
console.log("Duplicados:", duplicados); // [2, 4, 6, 8, 10]

// Filtrar valores maiores que 5
const filtrados = duplicados.filter((num) => num > 5);
console.log("Maiores que 5:", filtrados); // [6, 8, 10]

// Somar valores filtrados com reduce
const soma = filtrados.reduce((total, num) => total + num, 0);
console.log("Soma dos filtrados:", soma); // 24
