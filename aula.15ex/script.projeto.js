function contar(){
    var cont = document.getElementById('res')
    var pass = document.getElementById('txtp')
    var fim = document.getElementById('txtf')
    var inicio = document.getElementById('txti')
    if(fim.value == 0 || pass.value == 0){
        alert('[ERRO]')
    } else{
        cont.innerText = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        for(var c = i; c <= f; c += p){
            cont.innerHTML += ' ' + c
        }
    }
}
