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
    backgroundColor: "#3A633A",
    descricao:
      "Taylor Swift é o álbum de estreia homônimo da cantora e compositora estadunidense Taylor Swift, lançado através da Big Machine Records em 24 de outubro de 2006. O álbum conta com a produção de Nathan Chapman e Robert Ellis Orrall, e traz composições assinadas pela própria Swift em parceria com Liz Rose e os também produtores Orrall e Angelo Petraglia.",
    capa: "url(img/debut.capa.jpg)",
    cor2: "a5c9a5",
  },
  fearless: {
    backgroundColor: "#f0ca95",
    descricao: "teste",
    capa: "url(img/fearless.capa.png)",
    cor2: "#E8D7BE",
  },

  spn: {
    backgroundColor: "#c7a8cda",
    descricao: "teste",
    capa: "url(img/speakNow.capa.png)",
    cor2: "#66406E",
  },

  red: {
    backgroundColor: "#884141",
    descricao: "teste",
    capa: "url(img/red.capa.png)",
    cor2: "#e79283",
  },

  nine: {
    backgroundColor: "#bbe0eea",
    descricao: "teste",
    capa: "url(img/nine.capa.png)",
    cor2: "#527987",
  },

  rep: {
    backgroundColor: "#424242",
    descricao: "teste",
    capa: "url(img/reputation.capa.png)",
    cor2: "#A3A3A3",
  },

  lover: {
    backgroundColor: "#f3bcd2",
    descricao: "teste",
    capa: "url(img/lover.capa.png)",
    cor2: "#8C586D",
  },

  folk: {
    backgroundColor: "#979797",
    descricao: "teste",
    capa: "url(img/folklore.capa.png)",
    cor2: "#66406E",
  },

  evermore: {
    backgroundColor: "#c5ac90",
    descricao: "teste",
    capa: "url(img/evermore.capa.png)",
    cor2: "#4D2C1C",
  },

  midnights: {
    backgroundColor: "#242e47",
    descricao: "teste",
    capa: "url(img/midnights.capa.png)",
    cor2: "#9AA0AD",
  },

  ttpd: {
    backgroundColor: "#cccccc",
    descricao: "teste",
    capa: "url(img/ttpd.jpg)",
    cor2: "#808080",
  },
};

function handleCoverClick(albumId) {
  header.style.background = "#a5c9a5";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#a5c9a5";
  body.style.transition = "0.8s";

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

  mv.style.backgroundColor = "#3A633A";
  mv.style.transition = "0.8s";

  txt.innerHTML =
    "Taylor Swift é o álbum de estreia homônimo da cantora e compositora estadunidense Taylor Swift, lançado através da Big Machine Records em 24 de outubro de 2006. O álbum conta com a produção de Nathan Chapman e Robert Ellis Orrall, e traz composições assinadas pela própria Swift em parceria com Liz Rose e os também produtores Orrall e Angelo Petraglia.";
  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/debut.capa.jpg)";
}

function fearless() {
  var f = document.getElementById("fearless");

  header.style.background = "#f0ca95";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#f0ca95";
  body.style.transition = "0.8s";

  f.style.width = "30.5%";
  f.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/fearless.capa.png)";

  mv.style.backgroundColor = "#E8D7BE";
  mv.style.transition = "0.8s";
}

function spn() {
  var s = document.getElementById("spn");

  header.style.background = "#c7a8cd";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#c7a8cd";
  body.style.transition = "0.8s";

  s.style.width = "30.5%";
  s.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/speakNow.capa.png)";

  mv.style.backgroundColor = "#66406E";
  mv.style.transition = "0.8s";
}

function red() {
  var r = document.getElementById("red");

  header.style.background = "#884141";
  header.style.color = "white";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#884141";
  body.style.transition = "0.8s";

  r.style.width = "30.5%";
  r.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/red.capa.png)";

  mv.style.backgroundColor = "#e79283";
  mv.style.transition = "0.8s";
}

function nine() {
  var n = document.getElementById("nine");

  header.style.background = "#bbe0ee";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#bbe0ee";
  body.style.transition = "0.8s";

  n.style.width = "30.5%";
  n.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/nine.capa.png)";

  mv.style.backgroundColor = "#527987";
  mv.style.transition = "0.8s";
}

function rep() {
  var rp = document.getElementById("rep");

  header.style.background = "#424242";
  header.style.color = "white";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#424242";
  body.style.transition = "0.8s";

  rp.style.width = "30.5%";
  rp.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/reputation.capa.png)";

  mv.style.backgroundColor = "#A3A3A3";
  mv.style.transition = "0.8s";
}

function lover() {
  var l = document.getElementById("lover");

  header.style.background = "#f3bcd2";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#f3bcd2";
  body.style.transition = "0.8s";

  l.style.width = "30.5%";
  l.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/lover.capa.png)";

  mv.style.backgroundColor = "#8C586D";
  mv.style.transition = "0.8s";
}

function folk() {
  var fk = document.getElementById("folk");

  header.style.background = "#979797";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#979797";
  body.style.transition = "0.8s";

  fk.style.width = "30.5%";
  fk.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/folklore.capa.png)";

  mv.style.backgroundColor = "#D9D9D9";
  mv.style.transition = "0.8s";
}

function ever() {
  var e = document.getElementById("ever");

  header.style.background = "#c5ac90";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#c5ac90";
  body.style.transition = "0.8s";

  e.style.width = "30.5%";
  e.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/evermore.capa.png)";

  mv.style.backgroundColor = "#4D2C1C";
  mv.style.transition = "0.8s";
}

function mid() {
  var m = document.getElementById("mid");

  header.style.background = "#242e47";
  header.style.color = "white";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#242e47";
  body.style.transition = "0.8s";

  m.style.width = "30.5%";
  m.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";
  var t = document.getElementById("ttpd");
  t.style.width = "7.2%";
  t.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/midnights.capa.png)";

  mv.style.backgroundColor = "#9AA0AD";
  mv.style.transition = "0.8s";
}

function ttpd() {
  var t = document.getElementById("ttpd");

  header.style.background = "#cccccc";
  header.style.color = "black";
  header.style.transition = "0.8s";

  art.style.transition = "0.8s";

  var body = document.getElementById("body");
  body.style.backgroundColor = "#cccccc";
  body.style.transition = "0.8s";

  t.style.width = "30.5%";
  t.style.transition = "0.6s";
  var d = document.getElementById("debut");
  d.style.width = "7.2%";
  d.style.transition = "0.6s";
  var s = document.getElementById("spn");
  s.style.width = "7.2%";
  s.style.transition = "0.6s";
  var r = document.getElementById("red");
  r.style.width = "7.2%";
  r.style.transition = "0.6s";
  var n = document.getElementById("nine");
  n.style.width = "7.2%";
  n.style.transition = "0.6s";
  var rp = document.getElementById("rep");
  rp.style.width = "7.2%";
  rp.style.transition = "0.6s";
  var l = document.getElementById("lover");
  l.style.width = "7.2%";
  l.style.transition = "0.6s";
  var fk = document.getElementById("folk");
  fk.style.width = "7.2%";
  fk.style.transition = "0.6s";
  var e = document.getElementById("ever");
  e.style.width = "7.2%";
  e.style.transition = "0.6s";
  var m = document.getElementById("mid");
  m.style.width = "7.2%";
  m.style.transition = "0.6s";
  var f = document.getElementById("fearless");
  f.style.width = "7.2%";
  f.style.transition = "0.6s";

  capa.style.display = "block";
  capa.style.backgroundImage = "url(img/ttpd.jpg)";

  mv.style.backgroundColor = "#808080";
  mv.style.transition = "0.8s";
}
