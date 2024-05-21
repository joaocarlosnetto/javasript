var valores = []
var num = document.getElementById('num')
    var lista = document.getElementById('list')
function adicionar(){
    if(num.value == 0 || num.value > 100){
        alert('[ERRO]')
    } else{
        var item = document.createElement('option')
        item.text = 'Valor ' + num.value + ' foi adicionado'
        lista.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    var sec = document.getElementById('sec')
    sec.style.height = '340px'
    if(valores.value == 0){
        alert('[ERRO]')   
    } else{
        var res = document.getElementById('res')
        var tot = valores.length
        res.innerHTML += 'Ao todo temos ' + tot + ' elementos cadasttrados.'  
    }
}