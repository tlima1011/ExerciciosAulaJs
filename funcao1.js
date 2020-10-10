//Função sem retorno 
function imprimirSoma(a, b){ 
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,4,5,6,7)
imprimirSoma()
imprimirSoma('Zé','Mané')
//Função com Retorno 
function soma(a, b=1){ 
    return a + b 
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma('zé', ' ruela '))
console.log(soma())



//Um bloco de código, com uma ou mais comandos 
//Toda a função tem um nome 

/*function somar(a,b){ 
    return a + b 
}
let numero1 = 6 
let numero2 = 12 
console.log('Soma de Valores => ' +somar(numero1, numero2))
*/