//par nome valor 
const saudacao = "Opa" //contexto léxico 1
function exec(){
    const saudacao = "Falaaaa" //Contexto léxico 2 mais restrito 
    return saudacao
}
//const saudacao = "IPA!!!!"
//Objetos são grupos alinhados de pares nome/valor 
const cliente = { 
    nome: "Pedro ", 
    idade: 32,
    endereco: {
        logradouro: "Rua Muito legal", 
        numero: 123 
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)

