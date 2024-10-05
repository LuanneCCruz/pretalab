/* 
Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas 
e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking 
de medalhas no formato:
#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

function calcularQtdMedalhas() {
  let paises = [];
  let TiposMeds = [];
  let QtdsMeds = [];
  let totalQtdMed = 0;

while (true) {
  let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

  if (pais.toLowerCase() === "sair") {
    break;
  }

  let TipoMed = prompt("Digite o tipo da medalha (ouro, prata ou bronze):");
  let QtdMed = prompt("Digite a quantidade de medalhas:");

  if (!isNaN(QtdMed)) {
    paises.push(pais);
    TiposMeds.push(TipoMed);
    QtdsMeds.push(QtdMed);
    totalQtdMed += QtdMed; 
  } else {
    alert("Por favor, insira um valor numérico válido para as quantidade de medalhas.");
  }
}


if (paises.length > 0 && TiposMeds.length > 0) {


  let todasTiposMeds = TipoMed[0];
  let MaisMed = totalQtdMed[0];
  let MenosMed = totalQtdMed[0];
  let paisMaisMed = paises[0];
  let paisMenosMed = paises[0];

  for (let i = 1; i < QtdsMeds.length; i++) {
    if (QtdsMeds[i] > MaisMed) {
      MaisMed = QtdsMeds[i];
      paisMaisMed = paises[i];
    }
    if (QtdsMeds[i] < paisMenosMed) {
      MenosMed = QtdsMeds[i];
      paisMenosMed = paises[i];
    }

  }

  alert(`Relatório de Medalhas:
  - Tipo de Medalhas: ${todasTiposMeds};
  - País com mais Medalhas: ${paisMaisMed} (${MaisMed};
  - País com menos Medalhas: ${paisMenosMed} (${MenosMed} `);
} else {
  alert("Nenhum dado de medalhas foi inserido.");
}
}

calcularQtdMedalhas();
// Faltou fazer a apresentação por tipo de medalha 