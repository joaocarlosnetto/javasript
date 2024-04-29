var agora = new Date()
var hora = agora.getHours
console.log('agora são exatamente' + agora)
if(hora < 12){
    console.log('Bom dia')
    
} else if(hora <= 18){
    comsole.log('Boa tarde')
    
} else{
    console.log('Boa noite')
}