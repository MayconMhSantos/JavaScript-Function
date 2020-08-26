function contString()   {
    let text = prompt('Maximo 10 caracteres');
    if(text.length <= 10){
        console.log('Texto dentro do limite de caracteres.');
    }   else    {
        console.log('Texto muito longo.');
    }
}
contString()