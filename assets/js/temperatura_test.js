var expect = chai.expect;

describe("Medida", function () {
  describe("Constructor de la clase Medida", function() {
      it("Debería tener un Constructor", function() {
        var medida = new Medida(1, 'f');
        expect(medida.valor).to.equal(1);
      });
      it("Deberia poder recibir un solo parametro", function() {
        var medida = new Medida ('23e-1 c');
        expect(medida.valor).to.equal(23e-1);
        expect(medida.tipo).to.equal('c');
    });
  })
  describe("funcion match", function () {
    it("debería cazar bien", function () {
      var valor = Medida.match('330e-1 f to c');
      expect(parseFloat(valor.val)).to.equal(330e-1);
      expect(valor.tip).to.equal('f');
      expect(valor.para).to.equal('c');
    });
  });
  describe("funcion convertir", function () {
    it("deberia convertir correctamente", function() {
      var conv = Medida.convertir('320e-1 f to c');
      expect(conv).to.equal('0.00 Celsius');
    });
  });
});

describe("Clase Temperatura", function () {
  describe("constructor temperatura", function() {
    it("deberia tener un constructor", function() {
      var temperatura = new Temperatura (32, 'c');
      expect(temperatura.valor).to.equal(32);
    });
    it("deberia poder recibir un solo parametro", function() {
      var temperatura = new Temperatura ('32 c');
      expect(temperatura.valor).to.equal(32);
      expect(temperatura.tipo).to.equal('c');
    });
  });
});
