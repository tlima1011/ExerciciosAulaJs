const peso1 = 1
const peso2 = Number('2.0')
const nome = 'Thiago Lima de Moura'
console.log(peso1)
console.log(peso2)
console.log(Number.isInteger(peso1)) //Questiona se number é inteiro 
console.log(Number.isInteger(peso2))//Questiona se number é inteiro 
//console.log(typeof peso2)
const avaliacao1 = 9.871
const avaliacao2 = 6.871 

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // ajusta para somente duas casas decimais 
console.log(media.toString(2)) //Em binário 
console.log(media.toString().length) //converte em string e conta quantos caracteres 
console.log(nome.length) // conta quantidade de caracteres na constante nome 
console.log(typeof media) //tipo de dado 
console.log(typeof Number) //Tipe de função para Number 
console.log(typeof String) // Tipo de função para String 
console.log(typeof Boolean) //Tipo de função para Boolean 
console.log(nome.substring(3,8))