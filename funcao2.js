//Armazenando uma função em uma variável 
const imprimirSoma = function(a, b){
    console.log(a+ b)
}

imprimirSoma(2,3)
//Armazenando uma função arrow em variável 
const soma = (a,b) => {
    return a + b 
}
console.log(soma(2,3))
//retorno implícito 
const subtracao = (a,b) => a - b 

console.log(subtracao(10,4))
//Arrow function no ECMA Script 
const multiplicacao = (a, b) => a * b 
console.log(multiplicacao('Zúe','Rue'))

const somar = (a,b) => a + b 

console.log(somar('Zúe','Rue'))

const imprimir2 = a => console.log(a)
imprimir2('Zé RUELA,')




