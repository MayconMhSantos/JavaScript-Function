function retornaNumeroPar(n) {
    if(n % 2 == 0) {
        console.log('O valor de N agora e Par: ' + n);
    } else {
        console.log('Este valor e Impar: ' + n);
        retornaNumeroPar(n - 1);
        // se chegou ate aqui o numero nao e par entao o valor...
        // ...de 1 vai decrementar - 1 e testar novamente
    }
}

retornaNumeroPar(33);
retornaNumeroPar(55);
retornaNumeroPar(22);