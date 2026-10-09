//Object tiempo
var tiempo = {};

//Constructor
function miTiempo(aaaa,mm,dd,h,m,s){
    if((aaaa == 0) && (mm == 0) && (dd == 0) && (h == 0) && (m == 0) && (s== 0)){
        const hoy = new Date();
        this.aaaa = hoy.getFullYear();
        this.mm = hoy.getMonth();
        this.dd = hoy.getDate();
        this.h = hoy.getHours();
        this.m = hoy.getMinutes();
        this.s = hoy.getSeconds();
    }else{
        this.aaaa = aaaa;
        this.mm = mm;
        this.dd = dd;
        this.h = h;
        this.m = m;
        this.s = s;
    }
}

//getters y setters
miTiempo.prototype.getAño = function(){
    return this.aaaa;
}

miTiempo.prototype.setAño = function(aaaa){
    this.aaaa = aaaa;
}

//Métodos pedidos
miTiempo.prototype.esBisiesto = function(){
    return true;
}

///PROBANDO, PROBANDO
var t1 = new miTiempo(2000,1,1,0,0,0);
var t2 = new miTiempo(0,0,0,0,0,0);

console.log(t1.getAño());
console.log(t2.getAño());
