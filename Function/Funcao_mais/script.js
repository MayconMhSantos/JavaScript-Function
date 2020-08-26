// Criando uma funcao para multiplicar numeros
function multiplicarNum(a, b, c) {
    return a * b * c;
}
console.log('O valor multiplicado foi igual a :', + multiplicarNum(2,4,6));



// Reaproveitando a funcao multiplicar numeros jogando a function dentro de uma variavel
const mult = multiplicarNum(3,6,9);
console.log('O valor e :', + mult);


function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        alert('tem permissao para dirigir.'); // posso ultilizar alerta para testes.
        console.log('tem permissao para dirigir.');
    } else {
        alert('Nao tem permissao para dirigir'); // ultilizando alerta para testes.
        console.log('Nao tem permissao para dirigir');
    }     
   
}
podeDirigir(19, true);