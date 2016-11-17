(function() {
  'use strict';


  var expect = chai.expect;

  describe ('zoo objectives', function () {
    it('should know that the namespace exists', function() {
      expect(window.zoo).to.be.an('object');
      expect(window.zoo.Animal).to.be.an('function');
      expect(window.zoo.BlueWhale).to.be.an('function');
      expect(window.zoo.BlackRhino).to.be.an('function');

    });

    describe('zoo animal', function () {

      it('should create new animal', function() {
        var jack = new window.zoo.Animal('jack', 2013);
        expect(jack).to.be.an.instanceof(window.zoo.Animal);
      });

      it('should have a date of birth', function() {
        var jack = new window.zoo.Animal('jack', 2013);
        expect(jack.dob).to.equal(2013);
      });

      it('should have a name', function () {
        var jack = new window.zoo.Animal('jack', 2013);
        expect(jack.name).to.equal('jack');
      });

      it('should produce an error if no name is given', function() {
        try {
          new window.zoo.Animal();
          expect(true).to.be.false;
        } catch (err) {
          expect(err).to.be.an.instanceof(Object);
          expect(err).to.be.an.instanceof(TypeError);
        }
      });

      it('should produce an error if no date of birth is given', function () {
        try {
          new window.zoo.Animal('matt');
          expect(true).to.be.false;
        } catch (err) {
          console.log( err );
          expect(err).to.be.an.instanceof(Object);
          expect(err).to.be.an.instanceof(TypeError);
        }
      });

      it('should create an animal', function (){
        var matt2 = new window.zoo.Animal('matt2', 2010);
        expect(matt2).to.be.an.instanceof(Object);
      });
    });

    describe('BlueWhale', function() {
      it('should give birth to a baby whale', function() {
        var baby = new window.zoo.BlueWhale('baby', 2016);
        expect(baby).to.be.an.instanceof(Object);
      });

  


  });


  // don't need to test if it should produce an error when no name or dob are given
  // test that I can create animals
  //for give birth test if it returns a baby and it's an instance of bluewhale
  // 2

  // it('should give birth')

  // describe('constructor function', function () {
  //   it('should know that Animal is a construct function', function () {
  //     expect()
  //   })
  // }
  //create namespace

  // var x = new Animal
  // use instanceof to test if var x is an instanceof an Animal
  // test that each animal has a name & age and its the name and age that I passed in

  //3 tests --> giveBirth method


// });


}());
