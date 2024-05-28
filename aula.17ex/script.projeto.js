var num = document.getElementById('num')
var lista = document.getElementById('list')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
    return false
}
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       var item = document.createElement('option')
       item.text = 'O valor ' + num.value + ' foi adicionado'
       lista.appendChild(item)
       res.innerHTML = ''
    } else{
        alert('[ERRO]')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    var sec = document.getElementById('sec')
    sec.style.paddingBottom = '40px'
    if(valores.length == 0){
        alert('[ERRO]')
    } else{
        var tot = valores.length
        res.innerHTML = ''
        if(tot > 1){
            res.innerHTML += 'Há ' + tot + ' elementos cadastrados'
        } else{
            res.innerHTML += 'Há ' + tot + ' elemento cadastrado'
        }
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } else if(valores[pos] < menos) {
                menor = valores[pos]
            }
        } 

    }
}