function argOpcional(nome, idade) {
    if(idade == undefined) {
        console.log('Seu nome e ' + nome + '.');
    } else {
        console.log('Seu nome e ' + nome + ', e sua idade e ' + idade + ' anos.');
    }
}
argOpcional('maycon');
argOpcional('maycon', 25);


// ARGUMENTO COM VALOR UNDEFINED
// EXP 01
function repetirFrase(frase, n=2) {
    for(let x = 1 ; x <= n; x++) {
        console.log(frase + ' ' + x);  // ' ' + para dar espacamento entre os elementos
    }
}
repetirFrase('tetando => ', 5);
repetirFrase('testando duas vezes => ');


//EXP 02
function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log('Exmplo Original: ' + ' ' + potencia(2));
console.log('Setando valor 2, o resultado sera: ' + ' ' + potencia(2,2));
console.log('Setando valor 3, o resultado sera: ' + ' ' + potencia(2,3));


