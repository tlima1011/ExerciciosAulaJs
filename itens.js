let banheiro = [0,3,7,10,14]	 	
let mensalistas = [0,3,7,1,13] 
let automoveis = [0,3,5,8,11]
let microcomputador = [0,3,6,8,11]	
let lavalouças = [0,3,6,6,6]
let geladeira	= [0,2,3,5,5]
let freezer = [0,2,4,6,6]
let lavaroupa = [0,2,4,6,6]	
let dvd = [0,1,3,4,6]
let microondas = [0,2,4,4,4]	
let motocicleta = [0,1,3,3,3]
let secadora = [0,2,2,2,2]
let agua = [0,4]
let rua = [0,2]

let pontos = 0 
console.log(banheiro)
console.log(microcomputador)
console.log(banheiro[3] + geladeira[2])

console.log(agua[1] + rua[1])
//console.log(rua[1]) 

let escolaridade = 7
//[0,1,2,4,7]
switch(escolaridade){
    case (0):
        console.log("Analfabeto / fundamental I incompleto")
        break
    case (1):
        console.log("Fundamental I completo / Fundamental II incompleto")
        break
    case (2):
        console.log("Fundamental II completo / Médio incompleto")
        break
    case (4):
        console.log("Médio completo / Superior incompleto")
        break
    case (7):
        console.log("Superior Completo")
        break
    default: 
        console.log("Inválido")
}

function informarCriterio(){
    if(pontos <=100){
        document.getElementById('criterio').innerHTML = "A";
    }else if(pontos <= 45){
        document.getElementById('criterio').innerHTML = "B1";
    }else if(pontos <= 37){
        document.getElementById('criterio').innerHTML = "B2";
    }else if(pontos <= 28){
        document.getElementById('criterio').innerHTML = "C1";
    }else if(pontos <= 22){
        document.getElementById('criterio').innerHTML = "C2";
    }else if(pontos <= 16){
        document.getElementById('criterio').innerHTML = "DE";
    }else{
        document.getElementById('criterio').innerHTML = "Inválido";
    }
}


	
/*Analfabeto / fundamental I incompleto	0	ENCERRE
Fundamental I completo / Fundamental II incompleto	1	ENCERRE
Fundamental II completo / Médio incompleto	2	ENCERRE
Médio completo / Superior incompleto	4	
Superior Completo	7	*/
