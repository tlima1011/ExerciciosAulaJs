const prod1 = {}
prod1.nome = "Celular Ultra Mega" 
prod1.marca = "Xiaomi"
prod1.preco = 2000.55
prod1["Desconto Legal"] = 0.40 //Evitar atributos com espaço 
prod1['custo_importacao'] = 1000
prod1['total_R$'] = prod1['custo_importacao'] + prod1['preco']
console.log(prod1)
//console.log(typeof prod1)
const prod2 = { 
    nome: 'Camisa Polo Lacoste',
    preco: 80, 
    linha: 'Mega Jacaré',
    obj: {
        blba : 1, 
        obj: {
            bilulu : 2
        }
    } 
}
console.log(prod2)
const prod3 = { 
    nome: 'Camisa Guess', 
    preco: 250.00, 
    linha: 'Xupeta Louco ',
    tamanho :{ 
        t : 'X',
        t : 'p',
        t : 'XXG'
    }
}
prod3['Descontao'] = 0.5
console.log(prod3)