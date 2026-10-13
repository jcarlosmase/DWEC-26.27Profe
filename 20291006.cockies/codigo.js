var equipo = {};

function juega(nombre, numJugadores){
  this.nombre = nombre;
  this.numJugadores = numJugadores;

  this.getNombre = function(){
    return this.nombre;
  }

  this.getnumJugadores = function(){
    return this.numJugadores;
  }

}

//FUNCION PARA CREAR LA COOKIE
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(JSON.stringify(cvalue)) + ";" + expires + ";path=/";
}
//FUNCION PARA LEER LA COOKIE
function getCookie(cname) {
  const v = document.cookie.match('(^|;) ?' + cname + '=([^;]*)(;|$)');
  return v ? decodeURIComponent(v[2]) : null;
}


//creamos la cookie
setCookie("comida","manzanas",7);

//leemos la cookie
console.log("El valor de comida es: " + getCookie("comida"));

setCookie("comida","churros",7);
var valor = getCookie("comida");
console.log("El valor de comida es: " + valor);

//Otra cookie
var deportes = ["futbol", "baloncesto", "tenis"];
setCookie("deportes", deportes,30);

var valor = getCookie("deportes");
console.log(valor[0]); //futbol
valor[0] = "badminton";
setCookie("deportes", valor, 30);
console.log(valor[0]); //badminton

//Seguimos con cookies, pero con Objects
var olimpiadas = [];

olimpiadas.push(new juega ("futbol",11));
olimpiadas.push(new juega ("baloncesto",5));
//Guardamos la cookie
setCookie("olimpiadas",olimpiadas,30);
//leemos la cookie
var dep = getCookie("olimpiadas");
console.log(dep[0].getNombre); // Futbol