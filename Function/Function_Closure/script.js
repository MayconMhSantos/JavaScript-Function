function lembraSoma(x) {
    return function(y){
        return x + y;
    }
}

// Ultilizando Var soma A para somar o X da function com o Valor 5 da Variavel
let somaA = lembraSoma(2);
console.log(somaA(5));

let somaB = lembraSoma(3);
console.log(somaB(5));