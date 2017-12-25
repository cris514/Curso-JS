//Variables en mayusculas,
//significan que su valor no lo cambiaremos en un futuro.
//Creacion del objeto Teclas.
var teclas = {
  UP : 38,
  DOWN : 40,
  LEFT : 37,
  RIGTH :39
};

//Keydown detecta cuando tecleamos.
//Keyup detecta cuando soltamos la tecla.
document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");

dibujarLinea("red", 100, 100, 200, 200, papel);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;//grosor de la linea
  lienzo.moveTo( xinicial , yinicial);
  lienzo.lineTo( xfinal , yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//KeyCode es el numero que representa a cada tecla.
//keyCode de la Flecha a la izquierda 37
//keyCode de la Flecha a la derecha 39
function dibujarTeclado(evento) {

  switch (evento.keyCode) {
    case teclas.UP:
    console.log("ARRIBA!");
      break;
  }
switch (evento.keyCode) {
  case teclas.DOWN:
  console.log("ABAJO!");
    break;
}
switch (evento.keyCode) {
  case teclas.LEFT:
  console.log("IZQUIERDA!");
    break;
}
switch (evento.keyCode) {
  case teclas.RIGTH:
  console.log("DERECHA!");
    break;
    console.log("Tecla no habilitada!!");
    default:
    break;
}

}
