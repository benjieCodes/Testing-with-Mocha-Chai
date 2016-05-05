// Import Chai
import chai from 'chai';

// Import Any Files to Test
import '../src/js/main';
import { Animal } from '../src/js/animal';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

// Unit testing our 'Animal' Class
// describe () comes from mocha
describe('Our animal objects', function () {

  describe('Creation of an animal', function () {

    let a;
    let b;

    beforeEach(function () {
      a = new Animal({ species: 'cat'});
      b = new Animal({species: undefined});
    });

    it('should exist and be an instance of Animal' , function () {
      expect(a).to.be.an.instanceof(Animal);
    });

    it('should have a species', function () {
      expect(a.species).to.be.equal("cat");
      expect(b.species).to.be.equal(undefined)
    });

    it('should have an id assigned to it', function () {
      expect(a.id).to.be.a("number");
    });

  });

});
