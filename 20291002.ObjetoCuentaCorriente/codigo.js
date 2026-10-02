//Ejemplo Cuenta corriente
//Objeto Cuenta Corriente
var cuentaCorriente = new Cuenta2("Pepillo el de los Palotes", "111-11", 1000.00, 0.01);
//Métodos
//Contructores
//Constructor por defecto
function Cuenta1(){
    this.nombre = "";
    this.numero = "";
    this.saldo = 0.0;
    this.interes = 0.0;
}

//Constructor con parámetros
function Cuenta2(nombre,numCuenta,saldo,interes){
    this.nombre = nombre;
    this.numero = numCuenta;
    this.saldo = saldo;
    this.interes = interes;
}

//Constructor copia
function Cuenta3(c){
    this.nombre = c.nombre;
    this.numero = c.numero;
    this.saldo = c.saldo;
    this.interes = c.interes;
}
//geters
cuentaCorriente.getNombre = function(){
    return this.nombre;
}
cuentaCorriente.getNumero = function(){
    return this.numero;
}
cuentaCorriente.getSaldo = function(){
    return this.saldo;
}
cuentaCorriente.getInteres = function(){
    return this.interes;
}
//setters
cuentaCorriente.setNombre = function(nombre){
    this.nombre = nombre;
}
cuentaCorriente.setNumero = function(numero){
    this.numero = numero;
}
cuentaCorriente.setSaldo = function(saldo){
    this.saldo = saldo;
}
cuentaCorriente.setInteres = function(interes){
    this.interes = interes;
}
//Ingreso
cuentaCorriente.ingreso = function(cantidad){
    
}

//Ejemplos de uso
console.log(cuentaCorriente.getNombre());