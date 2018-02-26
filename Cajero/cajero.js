class Billete {
  constructor(v , c) {
    this.valor = v;
    this.cantidad = c;
  }
}

var caja = [];
caja.push(new Billete(50, 3) );
caja.push(new Billete(20, 2) );
caja.push(new Billete(10, 2) );
