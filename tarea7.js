//declaramos objeto
var xmlHttp;
function cargarArtistas() {
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "cd_catalog.xml");
  //xmlHttp.onreadystatechange = mensaje;
  xmlHttp.addEventListener("readystatechange", mensaje, false);
  xmlHttp.send();
}
function mensaje() {

  var nombres; //array
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    var select = document.getElementById("autores");
    xml = xmlHttp.responseXML;

    nombres = xml.getElementsByTagName('ARTIST');
    //console.log(nombres);
    for (var i = 0; i < nombres.length; i++) {
      var option = document.createElement('option');
      var texto = document.createTextNode(nombres[i].innerHTML);

      option.appendChild(texto);

      select.appendChild(option);
    }
  }

  document.getElementById('div').classList.add('wrapper');
}
