function decremento()   {
    let num = prompt('Digite um Valor para decrementar.')
    for(let i = 1; num > 1; num--){
        if(num %2 == 0){
            console.log(`Os Numeros Pares Sao ${num}.`);
        }
    }
}
decremento();