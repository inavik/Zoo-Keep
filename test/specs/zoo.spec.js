(function() {
  'use strict';


  var expect = chai.expect;

  describe ('the application', function () {
    it('should know that the namespace exists', function() {
      expect(window.zoo).to.be.an('object');
      expect(window.zoo.Animal).to.be.a('function');
      expect(window.zoo.BlueWhale).to.be.a('function');
      expect(window.zoo.BlackRhino).to.be.a('function');
    });

    describe('zoo animal', function () {

      it('should create new animal', function() {
        var jack = new window.zoo.Animal('jack', 2013);
        expect(jack).to.be.an('object');
        expect(jack).to.be.an.instanceof(window.zoo.Animal);
        expect(jack.name).to.equal('jack');
        expect(jack.dob).to.equal(2013);
      });

      it('should throw an error if no name is given', function() {
        try {
          new window.zoo.Animal();
          expect(true).to.be.false;
        } catch (err) {
            expect(err).to.be.an.instanceof(Object);
            expect(err).to.be.an.instanceof(TypeError);
        }
      });

      it('should throw an error if a string is given in place of date of birth', function () {
        try {
          new window.zoo.Animal('smurf');
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
        expect(baby).to.be.an.instanceOf(window.zoo.BlueWhale);
      });
      it('should thrown an error if new BlueWhale has no arguments', function () {
        try {
          new window.zoo.BlueWhale();
        } catch(err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
      it('should throw an error if new BlueWhale has a name but no dob', function() {
        try {
          new window.zoo.BlueWhale('kat');
        } catch (err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
      it('should be able to swim', function() {
        var bw = window.zoo.BlueWhale.prototype.swim;
        expect(bw).to.be.a('function');
      });
      it('should throw an error if no duration is given in argument', function() {
        try {
          new window.zoo.BlueWhale.swim();
        } catch (err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
    });

    describe('BlackRhino', function() {
      it('should give birth to a baby black rhino', function() {
        var baby = new window.zoo.BlackRhino('baby rhino', 2015);
        expect(baby).to.be.an.instanceof(Object);
        expect(baby).to.be.an.instanceof(window.zoo.BlackRhino);
      });

      it('should throw an error if no arguments are given', function() {
        try {
          new window.zoo.BlackRhino();
        } catch(err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
      it('should throw an error if it has a name but no dob', function() {
        try {
          new window.zoo.BlackRhino('riri');
        } catch(err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
      it('should throw an error if it has a dob but no name', function() {
        try {
          new window.zoo.BlackRhino(2015);
        } catch(err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
      it('should be able to roar', function() {
        var roar = window.zoo.BlackRhino.prototype.roar;
        expect(roar).to.be.a('function');
      });
      it('should throw an error if no arg is given for swimming', function() {
        try {
          new window.zoo.BlackRhino.roar();
        } catch (err) {
          expect(err).to.be.an.instanceOf(TypeError);
        }
      });
    });

  });
}());
