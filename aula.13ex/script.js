function verificar(){
    var data = new Date()
    var year = data.getFullYear
    var fano = document.getElementById ('iano')
    var res = document.getElementById ('res')
    if(fano.value.length == 0 || fano.value > year){
        alert('Verefique se o ano está correto!!')
    } else{
        var fsex = document.getElementsByName ('sexo')
        var idade = year - Number(fano.value)
        res.innerHTML = idade
    }
}