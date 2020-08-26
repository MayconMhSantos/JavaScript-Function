// Arrow nao e a mesma coisa que uma funcao!.
// Nao devemos ter atencao ao trocar uma funcao pow arrow function...
// ... uma das diferencas e que a arrow function ano possui o THIS.


let consoleTeste = () => {
    console.log('Hello Word');

}
consoleTeste();


let soma = (a,b) => {
    return a + b;
}
console.log(soma(5,5));


// Funcao Arrow padrao
const mult = (x) => {
    return x * 2;
}
console.log(mult(2));

// Funcao Arrow Simplificada Show!
const multSimplificada = (x) => x * 2;
console.log(multSimplificada(4));