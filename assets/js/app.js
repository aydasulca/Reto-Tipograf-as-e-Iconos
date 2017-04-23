var header = document.createElement("div");
header.setAttribute("id", "header");
document.body.appendChild(header);

var header1 = document.createElement("div");
header1.setAttribute("id", "header1");
header.appendChild(header1);

var medium = document.createElement("span");
medium.setAttribute("class", "icon-medium styleM")
medium.setAttribute("id", "medium");
header1.appendChild(medium);

var linea = document.createElement("div");
linea.setAttribute("id", "linea");
header1.appendChild(linea);

var imgCoders = document.createElement("div");
imgCoders.setAttribute("id", "imgCoders");
header1.appendChild(imgCoders);

var laboratoria = document.createElement("img");
laboratoria.setAttribute("src", "assets/img/laboratoria.jpg")
laboratoria.setAttribute("alt", "laboratoria");
laboratoria.setAttribute("id", "laboratoria");
imgCoders.appendChild(laboratoria);

var icon = document.createElement("div");
icon.setAttribute("id", "icon");
header1.appendChild(icon);

var follow = document.createElement("div");
follow.setAttribute("id", "follow");
icon.appendChild(follow);

var seguirHeader = document.createElement("P");
seguirHeader.setAttribute("class", "seguir");
follow.appendChild(seguirHeader);

var texto1 = document.createTextNode("Follow");
seguirHeader.appendChild(texto1);

var iconIS = document.createElement("div");
iconIS.setAttribute("id", "iconIS");
icon.appendChild(iconIS);

var icon1 = document.createElement("span");
icon1.setAttribute("class", "icon-instagram-with-circle stylesi");
iconIS.appendChild(icon1);

var icon2 = document.createElement("span");
icon2.setAttribute("class", "icon-snapchat stylesi");
iconIS.appendChild(icon2);

//

var header2 = document.createElement("div");
header2.setAttribute("id", "header2");
header.appendChild(header2);

var inUp = document.createElement("P");
inUp.setAttribute("id", "inUp");
header2.appendChild(inUp);

var texto2 = document.createTextNode("Edit");
inUp.appendChild(texto2);

var buscar = document.createElement("span");
buscar.setAttribute("id", "buscar");
buscar.setAttribute("class", "icon-search stileSearch");
header2.appendChild(buscar);

var visitas = document.createElement("div");
visitas.setAttribute("id", "visitas");
header2.appendChild(visitas);

var numero = document.createElement("P");
numero.setAttribute("id", "numero");
visitas.appendChild(numero);

var texto3 = document.createTextNode("5");
numero.appendChild(texto3);

var fotobelen = document.createElement("img");
fotobelen.setAttribute("src", "assets/img/belenR.jpg")
fotobelen.setAttribute("alt", "foto");
fotobelen.setAttribute("id", "fotobelen");
header2.appendChild(fotobelen);

var logolaboratoria = document.createElement("img");
logolaboratoria.setAttribute("src", "assets/img/logo_laboratoria.png")
logolaboratoria.setAttribute("alt", "logo");
logolaboratoria.setAttribute("id", "logolaboratoria");
header2.appendChild(logolaboratoria);

//

var navbar = document.createElement("div");
navbar.setAttribute("id", "navbar");
document.body.appendChild(navbar);

var autora = document.createElement("div");
autora.setAttribute("id", "autora");
navbar.appendChild(autora);

var belen = document.createElement("img");
belen.setAttribute("src", "assets/img/belenR.jpg")
belen.setAttribute("alt", "foto");
belen.setAttribute("id", "belen");
autora.appendChild(belen);

var datosAutora = document.createElement("div");
datosAutora.setAttribute("id", "datosAutora");
navbar.appendChild(datosAutora);

var name1 = document.createElement("div");
name1.setAttribute("id", "name");
datosAutora.appendChild(name1);

var name2= document.createElement("P");
name2.setAttribute("id", "name1");
name1.appendChild(name2);

var texto4 = document.createTextNode("Belen Recabal");
name2.appendChild(texto4);

var follow1 = document.createElement("div");
follow1.setAttribute("id", "follow1");
datosAutora.appendChild(follow1);

var seguirNavbar = document.createElement("P");
seguirNavbar.setAttribute("class", "seguir");
follow1.appendChild(seguirNavbar);

var texto5 = document.createTextNode("Follow");
seguirNavbar.appendChild(texto5);

var datos = document.createElement("P");
datos.setAttribute("id", "datos");
datosAutora.appendChild(datos);

var texto6 = document.createTextNode("Teaching Assistant at Laboratoria.Trabajando para ver a más mujeres en el mundo de la programación.");
datos.appendChild(texto6);

var fecha = document.createElement("P");
fecha.setAttribute("id", "fecha");
datosAutora.appendChild(fecha);

var texto7 = document.createTextNode("Mar 21 . 6 min read");
fecha.appendChild(texto7);

//

var column = document.createElement("div");
column.setAttribute("id", "column");
document.body.appendChild(column);

var titulo = document.createElement("P");
titulo.setAttribute("id", "titulo");
column.appendChild(titulo);

var texto8 = document.createTextNode("Hazlo con estilo : Tipografías, iconos y sprite");
titulo.appendChild(texto8);

var textocolumn = document.createElement("P");
textocolumn.setAttribute("class", "texto");
column.appendChild(textocolumn);

var texto9 = document.createTextNode("Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!");
textocolumn.appendChild(texto9);

var textoCentro = document.createElement("P");
textoCentro.setAttribute("class", "textoCentro");
column.appendChild(textoCentro);

var texto10 = document.createTextNode("Vamos paso a paso…");
textoCentro.appendChild(texto10);

var subtitulo = document.createElement("P");
subtitulo.setAttribute("class", "subtitulo");
column.appendChild(subtitulo);

var texto11 = document.createTextNode("@font-face: Como utilizar cualquier fuente/tipografía en tu web");
subtitulo.appendChild(texto11);

var textoColum1 = document.createElement("P");
textoColum1.setAttribute("class", "texto");
column.appendChild(textoColum1);

var texto12 = document.createTextNode("La regla CSS @font-face permite definir una tipografía e importarla para su uso en una página web. Antes de su existencia se podía definir una lista de familias en orden decreciente de prioridad con la regla font-family y se utilizaría la primera que el usuario tuviera instalada en su sistema, con font-face la fuente elegida se puede descargar y utilizar sin necesidad que el usuario disponga de ella con anteriordad.");
textoColum1.appendChild(texto12);

//

var footer = document.createElement("div");
footer.setAttribute("id", "footer");
document.body.appendChild(footer);

var iconFooter = document.createElement("div");
iconFooter.setAttribute("id", "iconFooter");
footer.appendChild(iconFooter);

var iconFooter1 = document.createElement("span");
iconFooter1.setAttribute("class", "icon-diamond2 stileDiamond");
iconFooter.appendChild(iconFooter1);

var iconFooter2 = document.createElement("span");
iconFooter2.setAttribute("class", "icon-lightbulb stylesi");
iconFooter.appendChild(iconFooter2);

var iconFooter3 = document.createElement("div");
iconFooter3.setAttribute("id", "iconFooter2");
footer.appendChild(iconFooter3);

var iconFooter4 = document.createElement("span");
iconFooter4.setAttribute("class", "icon-instagram-with-circle stylesi");
iconFooter3.appendChild(iconFooter4);

var iconFooter5 = document.createElement("span");
iconFooter5.setAttribute("class", "icon-snapchat stylesi");
iconFooter3.appendChild(iconFooter5);

var iconFooter6 = document.createElement("span");
iconFooter6.setAttribute("class", "icon-ribbon stylesi");
iconFooter3.appendChild(iconFooter6);

var lineaFooter = document.createElement("div");
lineaFooter.setAttribute("id", "lineaFooter");
footer.appendChild(lineaFooter);

var textFooter = document.createElement("div");
textFooter.setAttribute("id", "text-footer");
footer.appendChild(textFooter);

var textFooter1 = document.createElement("P");
textFooter1.setAttribute("id", "text-footer-1");
textFooter.appendChild(textFooter1);

var texto13 = document.createTextNode("Next story");
textFooter1.appendChild(texto13);

var textFooter2 = document.createElement("P");
textFooter2.setAttribute("id", "text-footer-2");
textFooter.appendChild(textFooter2);

var texto14 = document.createTextNode("Describiendo el flujo de trabajo en...");
textFooter2.appendChild(texto14);
