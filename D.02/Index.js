//Objetivo: Crie uma funcao que recebe como parametro a quantidade de vitorias e derrotas de um jogador, depois disso retorne o resultado para uma variavel, o saldo de Rankeadas deve
//ser feito atraves do calculo (vitorias - derrotas).
// Se Vitorias for menor do que 10 = Ferro
// se Vitorias for entre 11 e 20 = Bronze
// Se XP for entre 21 e 50 = Prata
// Se XP for entre 51 e 80 = Ouro
// Se XP for entre 81 e 90 = Diamante
// Se XP for entre 91 e 100 = Lendario
// Se XP for maior ou igual a 101 = Imortal

//Função para verificar o numero de vitorias do herói

let Heroi = "Lord of Shadows";
function Diminuir(numero1, numero2) {
    let resultado = numero1 - numero2;
    if (resultado <= 10 ) {
        nivel = "ferro";
    } else if (resultado >= 11 && resultado <= 20) {
        nivel = "bronze";
    } else if (resultado >= 21 && resultado <= 50) {
        nivel = "prata";
    } else if (resultado >= 51 && resultado <= 80) {
        nivel = "ouro";
    } else if (resultado >= 81 && resultado <= 90) {
        nivel = "diamante";
    } else if (resultado >= 91 && resultado <= 100) {
        nivel = "lendario";
    } else if (resultado >= 101) {
        nivel = "imortal";
    }
        return resultado;
    }

let nivel;
let vitoria = Diminuir(100,3);
console.log("O " + Heroi + " tem saldo de " + vitoria + " vitoria(s) e está no nível de " + nivel);