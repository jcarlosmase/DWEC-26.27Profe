//Object tiempo
var tiempo = {};

//Constructor
function miTiempo(aaaa,mm,dd,h,m,s){
    if(aaaa == mm == dd == h == m == s == 0){
        let marca = Date();
        this.aaaa = marca.getFullYear();
        this.mm = marca.getMonth();
        this.dd = marca.getDate();
        this.h = marca.getHours();
        this.m = marca.getMinutes();
        this.s = marca.getSeconds();
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
