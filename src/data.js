(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = Animal;
  window.zoo.BlueWhale = BlueWhale;
  window.zoo.BlackRhino = BlackRhino;


/**
 * This will create a new animal when given a new name and date of birth
 * @param {String} name The name of the new animal
 * @throws {TypeError} If the arguments are not a string and a Number
 * @param {Number} dob  the number for its date of birth
 */
  function Animal(name, dob) {
    if (typeof(name) !== 'string') {
      var err = new TypeError ('Hey! The name has to be a string!');
      err.userMessage = 'Sorry, our developers are cray cray';
      throw err;
    }

    if (typeof(dob) !== 'number') {
      var err = new TypeError ('Hey! The date of birth has to be a number!');
      err.userMessage = 'Sorry, our developers did not get this right...'
      throw err;
    }

    this.name = name || 'no name'; // "this" points to the "Animal" we're creating at that time
    this.dob = dob;
  }

  // var bill = new Animal('bill', 2009);
  // var jack = new Animal('jack', 2006);
  //
  // console.log('b:', bill);
  // console.log('j:', jack);

  /**
   * Giving the BlueWhale a name and dob
   * @param {String} name This will give a new name
   * @param {Number} dob  The dob of the BlueWhale
   */
  function BlueWhale(name, dob) {
    Animal.apply(this, [name, dob]); // .apply tells Animal to execute but once inside
  // I want this to point to new Narwhal   // Each fn has its own this
  // apply says change my context to whatever I put inside (this
  // inside .apply(points to Narwhal)
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
  BlueWhale.prototype.giveBirth = function giveBirth() { // Instance Method:
    var baby = new BlueWhale('baby whale', 2016);        //function that is on an object like giveBirth
    return baby; // OR return new Bluewhale('baby whale', 2016)
  }

  BlueWhale.prototype.swim = function swim(duration) {
    return ("I'm swimming for an hour!");
  }

  var bw = new BlueWhale('matt', 2000);
  console.log(bw);
  console.log(bw.giveBirth());
  console.log(bw.swim());

  /**
   * This creates a BlackRhino that takes a name and an age because it's an animal
   * @param {String} name The name of BlackRhino
   * @param {Number} dob  The date of birth of BlackRhino
   */
  function BlackRhino(name, dob) {
    Animal.apply(this, [name, dob]); // .apply lets us change the context and it's arguments
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
