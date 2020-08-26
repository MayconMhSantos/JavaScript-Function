function parametroIdade(idade){
    if(idade == undefined){
        console.log('Digite a Idade por favor.');
    } else {
        console.log(`Sua idade e de ${idade} anos.`);
    }
}

parametroIdade(); // nao foi passado aidade (estoura o IF)
parametroIdade(12);
parametroIdade(22);