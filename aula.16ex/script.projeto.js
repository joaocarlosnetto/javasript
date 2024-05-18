function gerar(){
    var numero = document.getElementById('tabuada')
    var tabuada = document.getElementById('resultado')
    var esc = document.getElementById('ess')
    esc.style.display = 'block'
    tabuada.style.display = 'block'
    if(numero.value == 0){
        alert('[ERRO]')
    } else{ 
    var n = Number(numero.value)
    var c = 1
    tabuada.innerText = ' '
    while(c <= 10){
        var item = document.createElement('option')
        item.text = n + ' X ' + n + ' = ' + n*c
        item.value = 'tabuada' + c
        tabuada.appendChild(item)
        tabuada.style.width = '100px'
        c++
    }
    }
}

function esconder(){
    var tabuada = document.getElementById('resultado')
    tabuada.style.display = 'none'
}