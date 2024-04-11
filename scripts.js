// seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");


// Variaveis globais
let operacaoAtual = ""; // O que ta sendo executado no momento
let operador = null; //  - * + /
let valorAnterior = ""; // o que foi calculado antes
let calculando = false; // se ta sendo executado alguma operação na calculadora

// Funções
function atualizaDisplay(){
    display.value = operacaoAtual;
}

function insereNumero(evento){ //abrir numeros sendo disparado na tela
if(calculando) {
    operacaoAtual = evento.target.textContent;
    calculando = false;

} else {
    operacaoAtual += evento.target.textContent;
}
atualizaDisplay();
}

//função de inserior ponto
function inserePonto(){
    if(operacaoAtual.indexOf(".") === -1){
        operacaoAtual += ".";
        atualizaDisplay();
    }
}

function insereOperador(evento){
    if(operacaoAtual !== ""){
        if(!calculando){
            if(operador !== null){
            calcula();
            }
            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        }
        operador = evento.target.textContent
    }
}

function calcula() {
     let resultado = null;
     const operandoAnterior = parseFloat(valorAnterior);
     const operandoAtual = parseFloat(operacaoAtual)

     switch(operador){
        case "+":
            resultado = operandoAnterior + operandoAtual;
            break;

        case "-":
             resultado = operandoAnterior - operandoAtual;
            break;

        case "*":
             resultado = operandoAnterior * operandoAtual;
            break;

            case "/":
                if (operandoAtual !== 0) {
                  resultado = operandoAnterior / operandoAtual;
                } else {
                  alert("Erro: Divisão por zero não é permitida!");
                  return;
                }
                break;
     
 }

 operacaoAtual = String(resultado);
 valorAnterior = operacaoAtual;
 calculando = true;
 atualizaDisplay()
}

// Eventos
botaoPonto.addEventListener("click", inserePonto);

botoesNumeros.forEach((botao) => 
botao.addEventListener("click", insereNumero));

botoesOperadores.forEach((botao) => 
botao.addEventListener("click", insereOperador));

botaoIgual.addEventListener("click", calcula)