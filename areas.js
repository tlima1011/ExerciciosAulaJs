function areaCircunferencia(r){ 
    const pi = 3.1415 
    //pi = 4
    return pi * (r * r )
}

function areaQuadradado(l){
    return l * l 
}

function areaRetangulo(b,h){
    return b * h 
}

function areaTriangulo(b,h){
    return b * h / 2 
}

let raio = 8.0 
raio = 44.0
//area = areaCircunferencia(raio)
console.log("Área da Circunferência.: "+areaCircunferencia(raio))

let lado = 6.0 
console.log("Área do quadrado.: " +areaQuadradado(lado))

let base = 8.0, altura = 4.0
console.log("Área do retângulo.: " +areaRetangulo(base,altura))

base = 8.0, altura = 4.0
console.log("Área do triangulo.: " +areaTriangulo(base,altura))
