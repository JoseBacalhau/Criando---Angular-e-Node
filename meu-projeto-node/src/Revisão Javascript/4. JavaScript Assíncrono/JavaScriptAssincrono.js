async function simularChamadaAPI() {
  console.log("Iniciando chamada à API...");

  const resultado = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados da API recebidos!");
    }, 2000); // Simula 2 segundos de espera
  });

  console.log(resultado);
}

simularChamadaAPI();
