let valor // nunca foi inicializada
console.log(valor)
valor = null
console.log(valor) // ausencia de valor, para nenhum local de memória 
//console.log(valor.toString()) //Erro!!! 
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 4.55 
console.log(produto.preco)
console.log(produto)

produto.preco = undefined //evite atrbuir undefined 
console.log(!!produto.preco)
delete produto.preco
console.log(produto)
produto.preco = null
console.log(produto)
console.log(!!produto.preco)
console.log(produto)


