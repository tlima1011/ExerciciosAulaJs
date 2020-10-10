//idade = 20 
function informarIdade(i){
    maiorDeIdade = i >= 18
    if (i >= 60 && maiorDeIdade){
        return 'Aproveite a melhor idade'
    }else if (maiorDeIdade){ 
        return 'Entre na festa'
    }else{ 
        return 'Vai para casa'
    }
}
let idade = 70
console.log(informarIdade(idade))
