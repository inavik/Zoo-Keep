(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = Animal;
  window.zoo.BlueWhale = BlueWhale;
  window.zoo.BlackRhino = BlackRhino;



/**
 * This will create a new animal when given a new name and date of birth
 * @param {String} name The name of the new Animal
 * @param {Number} dob  the number for its date of birth
 * @throws {TypeError}  if the arguments are not a string and a Number
 */
  function Animal(name, dob) {
    try {
      if(typeof(name) !== 'string') {
        throw new TypeError('Hi there, this name has to be a string!');
      }
    } catch (err) {
      err.userMessage = 'Sorry, our developers are cray cray';
    }
    try {
      if(typeof(dob) !== 'number') {
        throw new TypeError ('Hi there, the date of birth has to be a number!');
      }
    } catch (err1) {
      err.userMessage = 'Sorry, our developers are cray cray';
    }
    this.name = name;
    this.dob = dob;
  }

  // var bill = new Animal('bill', 2009);
  // var jack = new Animal('jack', 2006);
  //

  /**
   * Creates a new BlueWhale with a name and dob
   * @param {String} name This will give BlueWhale a name
   * @param {Number} dob  The will give BlueWhale a dob
   */
  function BlueWhale(name, dob) {
    Animal.apply(this, [name, dob]);
  }

  BlueWhale.prototype = Object.create(Animal.prototype);// this sets up the chain
  //here we say, what it means to be a BlueWhale is what it means to be an Animal
  //base the BlueWhale prototype on the animal prototype
  //above, we make bluewhale prototype equal to animal protype but we want to flip it back to bluewhale
  BlueWhale.prototype.constructor = BlueWhale; // this flips the constructor back to Bluewhale
  BlueWhale.prototype.breed = 'BlueWhale';


  /**
   * This gives birth to another animal
   * @return {Object} Gives back a baby mammal
   */
  BlueWhale.prototype.giveBirth = function giveBirth() {
    var baby = new BlueWhale('baby whale', 2016);
    return baby; // OR return new Bluewhale('baby whale', 2016)
  }

  BlueWhale.prototype.swim = function swim(duration) {
    return ("I'm swimming for an hour!");
  }

  var bw = new BlueWhale('smurf', 2000);
  console.log(bw);
  console.log(bw.giveBirth());
  console.log(bw.swim());

  /**
   * This creates a BlackRhino that takes a name and an age because it's an animal
   * @param {String} name The name of BlackRhino
   * @param {Number} dob  The date of birth of BlackRhino
   */
  function BlackRhino(name, dob) {
    Animal.apply(this, [name, dob]);
  }

  BlackRhino.prototype = Object.create(Animal.prototype);
  BlackRhino.prototype.constructor = BlackRhino;
  BlackRhino.prototype.breed = 'BlackRhino';

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
