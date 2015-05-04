var Style = function(elemento,nome_atributo,valor){
    return valor;
}

function assert(resultado, fn){
    (resultado === fn)?console.log("teste passou"):console.log("teste falhou");
}

assert('30px', Style('div','font-size','30px'));