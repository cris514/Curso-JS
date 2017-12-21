
//getElementById Metodo del documento que trae un elemento atravez del ID.
var d = document.getElementById('dibujito')
// getContext Metodo del canvas.
var lienzo = d.getContext("2d");

var lineas = 30;

var l = 0;
//yinicial, xfinal
var yi, xf;
var colores = "#ec407a";
//Ejecuta mientras la condicion sea igual.
for(l = 0; l < lineas; l++){
yi =10 * l;
xf = 10 * (l + 1);
dibujarLinea(colores, 0, yi, xf, 300);
console.log("linea" + l);

}
dibujarLinea(colores,1 ,1 ,1 ,299);
dibujarLinea(colores,1 ,300 ,299 ,299);

dibujarLinea(colores,1 ,1 ,299 ,0);
dibujarLinea(colores,300 ,0 ,299 ,299);




dibujarLinea(colores,1 ,300 ,299 ,299);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo( xinicial , yinicial);
  lienzo.lineTo( xfinal , yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

/*
console.log(lienzo); // esto es para verificar en la consola
//Inicia el Dibujo.
lienzo.beginPath();
//Propiedad del objeto lienzo  se le asigna el color.
lienzo.strokeStyle = "red";
//
lienzo.moveTo(0, 0);
//
lienzo.lineTo(0, 250);
//Es el hecho de trasar la linea.
lienzo.stroke();
//
lienzo.moveTo(0, 250);
//
lienzo.lineTo(250, 250);
//
lienzo.stroke();
//
lienzo.moveTo(250, 250);
//
lienzo.lineTo(250, 0);
//
lienzo.stroke();
//
lienzo.moveTo(250, 0);
//
lienzo.lineTo(0, 0);
//
lienzo.stroke();
//Termina el Dibujo.
lienzo.closePath();
*/
