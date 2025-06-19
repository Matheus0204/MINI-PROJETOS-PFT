

let horasDeTreino = 12; 
let inscricaoConfirmada = true; 
let idadeAtleta = 15; 

console.log("--- Dados do Atleta ---");
console.log(`Horas de Treino: ${horasDeTreino} horas`);
console.log(`Inscrição Confirmada: ${inscricaoConfirmada ? 'Sim' : 'Não'}`);
console.log(`Idade do Atleta: ${idadeAtleta} anos`);
console.log("------------------------");
let treinouCorretamente = horasDeTreino >= 10;
console.log(`Atleta treinou corretamente (>= 10h)? ${treinouCorretamente ? 'Sim' : 'Não'}`);
let estaInscrito = inscricaoConfirmada === true;
console.log(`Atleta está inscrito? ${estaInscrito ? 'Sim' : 'Não'}`);

let idadePermitida = idadeAtleta >= 12 && idadeAtleta <= 18;
console.log(`Atleta tem idade permitida (12-18 anos)? ${idadePermitida ? 'Sim' : 'Não'}`);

let podeCompetir = treinouCorretamente && estaInscrito && idadePermitida;

console.log("\n--- Resultado Final ---");
console.log(`O atleta pode competir nos JEPs? ${podeCompetir ? 'Sim' : 'Não'}`);

if (podeCompetir) {
    console.log(" Parabéns! O atleta está apto para competir nos JEPs!");
} else {
    console.log(" Ops! O atleta não está apto para competir nos JEPs no momento.");
    console.log("Verifique os seguintes requisitos:");

    if (!treinouCorretamente) {
        console.log("- Não atingiu as horas de treino necessárias (mínimo de 10h).");
    }
    if (!estaInscrito) {
        console.log("- Inscrição não confirmada.");
    }
    if (!idadePermitida) {
        console.log("- Idade fora da faixa permitida (12 a 18 anos).");
    }
}
