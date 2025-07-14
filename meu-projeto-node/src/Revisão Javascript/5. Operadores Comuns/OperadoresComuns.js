// ?? (nullish coalescing)
let valor = null;
let resultado = valor ?? "Valor padrão";
console.log(resultado); // "Valor padrão"

// ?. (optional chaining)
const usuario = {
  nome: "João",
  endereco: { cidade: "SP" },
};

console.log(usuario.endereco?.cidade); // "SP"
console.log(usuario.telefone?.ddd); // undefined (não lança erro)

// && (AND lógico)
const logado = true;
logado && console.log("Usuário está logado"); // Executa console.log

// || (OR lógico)
let corPreferida = "";
let corPadrao = corPreferida || "azul";
console.log(corPadrao); // "azul"
