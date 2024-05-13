function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value == '0' || Number(fano.value) > ano){
        alert('[ERRO] Verifique o ano de nascimento!!')
    } else{
       var idade = ano - Number(fano.value)
       res.innerText = 'Você tem ' + idade + ' anos.'
       var sx = document.getElementsByName ('radsex')
       var img = document.getElementById ('img')

       if(sx[0].checked){
        if (idade < 10){
            img.style.display = 'block'
            img.src = 'boy.jpg'
        } else if (idade < 21){
            img.style.display = 'block'
            img.src = 'young man.jpg'
        } else if (idade < 50){
            img.style.display = 'block'
            img.src = 'man.jpg'
        } else{
            img.style.display = 'block'
            img.src = 'old man.jpg'
        }

    }  else if (sx[1].checked) {
        if (idade < 10){
            img.style.display = 'block'
            img.src = 'girl.jpg'
        } else if (idade < 21){
            img.style.display = 'block'
            img.src = 'young woman.jpg'
        } else if (idade < 50){
            img.style.display = 'block'
            img.src = 'woman.jpg'
        } else{
            img.style.display = 'block'
            img.src = 'old woman.jpg'
        }
      }

    }
}

