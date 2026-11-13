class carta{
    constructor(num,palo){
        this.n = num;
        this.p = palo;
        this.robada = false;
    }
    //getters y setters
    getNum(){
        return this.n;
    }
    setNum(num){
        this.n = num;
    }
    getPalo(){
        return this.p;
    }
    setPalo(palo){
        this.p = palo;
    }
    estaRobada(){
        return this.robada;
    }
    roba(){
        this.robada = true;
    }
}

class baraja{
    constructor(){
        //construyo un array de cartas con los
        //criterios de orden del enunciado
        this.mazo = []; //Array de cartas
        let palos = ["c","r","p","t"];
        for(let i=0;i<4;i++){ //palos
            for(let j=1;j<14;j++){  //numeros
                this.mazo.push(new carta(j,palos[i]));
            }
        }
    }
    barajar(){
        //Intercambio cartas de froma aleatoria
        //dentro del array de cartas
    }
    robar(){
        //Devuelve una carta: La primer carta no robada
        //del mazo
        for(let i=0;i<52;i++){
            if(!this.mazo[i].estaRobada()){
                this.mazo[i].roba();
                return this.mazo[i];
            }
        }
        return null;
    }
    cortar(){
        //genero una posición aleatoria entre 0..51
        //e intercambio los 2 bloques de cartas entre sí
    }
}
//Interacción con el usuraio
//Capturo los botones
let bNueva = document.getElementById("bNueva");
let bBarajar = document.getElementById("bBarajar");
let bCortar = document.getElementById("bCortar");
let bRobar = document.getElementById("bRobar");
let cartaRobada = document.getElementById("cartaRobada");

var miBaraja = new baraja();

//Invocar los eventos necesarios
bNueva.addEventListener("click", () => {
    //1. instanciar un nuevo objeto de la clase baraja
    miBaraja = new baraja();
    //2. Dejar el div vacio
    cartaRobada.innerHTML = "";
    //3. Mostrar un mensajico
    alert("Se ha creado una baraja nueva");
});
bBarajar.addEventListener("click", () => {
    //1. Llamar al método barajar de la clase baraja
    //2. mostrar un mensajico
});
bCortar.addEventListener("click", () => {
    //1. Llamar al método cortar de la clase baraja
    //2. Mortrar un mensajico
});
bRobar.addEventListener("click", () => {
    //1. Llamar el método robar y recoger un objeto carta
    let c = miBaraja.robar();
    //2. Llamamnos a los métodos getPalo y getNum
    //   para formar el nombre de la imagen que vamos a
    //   mostrar en el div cartaRobada
    if(c !== null)
        cartaRobada.innerHTML = "<img src='img/" + c.getPalo() + c.getNum() + ".jpg' />";
    else
        alert("No quedan cartas en el mazo")
});