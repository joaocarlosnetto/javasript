var art = document.getElementById("art");

var mv = document.getElementById("mv");

var txt = document.getElementById("txta");

var capa = document.getElementById("capa");

var header = document.getElementById("header");

function menu() {
  var menu = document.getElementById("menu");
  if (menu.style.display == "none") {
    menu.style.display = "block";
    menu.style.transition = "0.6s";
  } else {
    menu.style.display = "none";
  }
}

var albuns = {
  debut: {
    header: "black",
    backgroundColor: "#a5c9a5",
    descricao:
      "Taylor Swift é o álbum de estreia homônimo da cantora e compositora estadunidense Taylor Swift, lançado através da Big Machine Records em 24 de outubro de 2006. O álbum conta com a produção de Nathan Chapman e Robert Ellis Orrall, e traz composições assinadas pela própria Swift em parceria com Liz Rose e os também produtores Orrall e Angelo Petraglia.",
    capa: "url(img/debut.capa.jpg)",
    cor2: "#3A633A",
  },
  fearless: {
    header: "black",
    backgroundColor: "#f0ca95",
    descricao: "teste",
    capa: "url(img/fearless.capa.png)",
    cor2: "#E8D7BE",
  },

  spn: {
    header: "black",
    backgroundColor: "#c7a8cd",
    descricao: "teste",
    capa: "url(img/speakNow.capa.png)",
    cor2: "#66406E",
  },

  red: {
    header: "white",
    backgroundColor: "#884141",
    descricao: "teste",
    capa: "url(img/red.capa.png)",
    cor2: "#e79283",
  },

  nine: {
    header: "black",
    backgroundColor: "#bbe0ee",
    descricao: "teste",
    capa: "url(img/nine.capa.png)",
    cor2: "#527987",
  },

  rep: {
    header: "white",
    backgroundColor: "#424242",
    descricao: "teste",
    capa: "url(img/reputation.capa.png)",
    cor2: "#A3A3A3",
  },

  lover: {
    header: "black",
    backgroundColor: "#f3bcd2",
    descricao: "teste",
    capa: "url(img/lover.capa.png)",
    cor2: "#8C586D",
  },

  folk: {
    header: "black",
    backgroundColor: "#979797",
    descricao: "teste",
    capa: "url(img/folklore.capa.png)",
    cor2: "#D9D9D9",
  },

  evermore: {
    header: "black",
    backgroundColor: "#c5ac90",
    descricao: "teste",
    capa: "url(img/evermore.capa.png)",
    cor2: "#4D2C1C",
  },

  midnights: {
    header: "white",
    backgroundColor: "#242e47",
    descricao: "teste",
    capa: "url(img/midnights.capa.png)",
    cor2: "#9AA0AD",
  },

  ttpd: {
    header: "black",
    backgroundColor: "#cccccc",
    descricao: "teste",
    capa: "url(img/ttpd.jpg)",
    cor2: "#808080",
  },
};

function handleCoverClick(albumId) {
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  const listaNomeAlbuns = Object.keys(albuns);

  let index = 0;

  while (index < listaNomeAlbuns.length) {
    const album = listaNomeAlbuns[index];

    var albumElemento = document.getElementById(album);
    if (album === albumId) {
      albumElemento.style.width = "32.9%";
    } else {
      albumElemento.style.width = "6.71%";
    }
    albumElemento.style.transition = "0.6s";

    index++;
  }


  const albumAberto = albuns[albumId];
  mv.style.backgroundColor = albumAberto.cor2
  mv.style.transition = "0.8s";
  txt.innerHTML = albumAberto.descricao;
  capa.style.display = "block";
  capa.style.backgroundImage = albumAberto.capa;
  header.style.backgroundColor = albumAberto.backgroundColor
  header.style.color = albumAberto.header;
}
