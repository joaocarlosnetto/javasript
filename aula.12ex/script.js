var msg = document.getElementById ('msg')

var data = new Date()
var hora = data.getHours()

var img = document.getElementById ('img')

var fundo = document.getElementById('fundo')
msg.innerText = 'Agora são ' + hora + ' horas'

var title = document.getElementById('title')

if (hora >= 0 && hora < 12){
    img.src = 'morning.jpg'
    fundo.style.background = 'rgb(106, 160, 129)'
    title.style.color = 'white'
    msg.style.color = 'rgb(106, 160, 129)'
}

 else if (hora >= 12 && hora < 18){
    img.src = 'afternoon.jpg'
    fundo.style.background = ' rgb(204, 147, 94)'
    title.style.color = 'white'
    msg.style.color = 'rgb(204, 147, 94)'
}

 else{
    img.src = 'night.jpg'
    fundo.style.background = 'rgb(86, 113, 161)'
    title.style.color = 'white'
    msg.style.color = 'rgb(86, 113, 161)'
}
