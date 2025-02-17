//Objetivo: Criar uma variavel para armazenar o nome e a quantidade de experiencia (XP) de um heroi, depois utilize uma estrutura de decisao para apresentar
//alguma das mensagens abaixo:
// Se XP for menor do que 1000 = Ferro
// se XP for entre 1001 e 2000 = Bronze
// Se XP for entre 2001 e 5000 = Prata
// Se XP for entre 5001 e 7000 = Ouro
// Se XP for entre 7001 e 8000 = Platina
// Se XP for entre 8001 e 9000 = Ascedente
// Se XP for entre 9001 e 10000 = Imortal
// Se XP for maior ou igual a 10001 = Radiante

let experiencia; // Inicializa a variável sem valor
let apelido = "Lord of Shadows";

// Função para verificar o nível do herói
function verificarNivel(experiencia) {
    
    if (experiencia >= 1 && experiencia <= 1000) {
        console.log("O herói de nome " + apelido + " está no nível Ferro.");
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        console.log("O herói de nome " + apelido + " está no nível Bronze.");
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        console.log("O herói de nome " + apelido + " está no nível Prata.");
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        console.log("O herói de nome " + apelido + " está no nível Ouro.");
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        console.log("O herói de nome " + apelido + " está no nível Platina.");
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        console.log("O herói de nome " + apelido + " está no nível Ascendente.");
    } else if (experiencia >= 9001 && experiencia < 10000) {
        console.log("O herói de nome " + apelido + " está no nível Imortal.");
    } else if (experiencia >= 10000) {
        console.log("O herói de nome " + apelido + " está no nível Radiante.");
    } else {
        console.log("O herói de nome " + apelido + " ainda não iniciou sua jornada.");
    }
}

// Definição da experiência depois do código
experiencia = 10; // Você pode alterar esse valor
verificarNivel(experiencia); // Chama a função para verificar o nível