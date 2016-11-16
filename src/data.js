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

  BlueWhale.prototype.giveBirth = function giveBirth() {
    var baby = new BlueWhale('baby whale', 2016);
    return baby;
  }

  BlueWhale.prototype.swim = function swim(duration) {
    return ("I'm swimming for an hour!");
  }

  var bw = new BlueWhale('matt', 2000);
  console.log(bw);
  console.log(bw.giveBirth());
  console.log(bw.swim());

  function BlackRhino(name, dob) {
    Animal.apply(this, [name, dob]);
  }

  BlackRhino.prototype = Object.create(Animal.prototype);
  BlackRhino.prototype.constructor = BlackRhino;

  BlackRhino.prototype.giveBirth = function giveBirth() {
    var baby = new BlackRhino('baby rhino', 2015);
    return baby;
  }

  BlackRhino.prototype.roar = function roar(arg) {
    return 'ROAR!!';
  }

  var br = new BlackRhino('matteo', 2005);
  console.log(br);
  console.log(br.giveBirth());
  console.log(br.roar("hi!"));


}());
