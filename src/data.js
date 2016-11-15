(function() {
  'use strict';

  function Animal(name, dob) {
    this.name = name || 'no name';
    this.dob = dob;
  }

  var bill = new Animal('bill', 2009);
  var jack = new Animal('jack', 2006);

  console.log('b:', bill);
  console.log('j:', jack);

  function BlueWhale(name, dob) {
    Animal.apply(this, [name, dob]);
  }

  BlueWhale.prototype = Object.create(Animal.prototype);
  BlueWhale.prototype.constructor = BlueWhale;


  var bw = new BlueWhale('matt', 2000);
  console.log(bw);

  function BlackRhino(name, dob) {
    Animal.apply(this, [name, dob]);
  }

  BlackRhino.prototype = Object.create(Animal.prototype);
  BlackRhino.prototype.constructor = BlackRhino;

  var br = new BlackRhino('matteo', 2005);
  console.log(br);



}());
