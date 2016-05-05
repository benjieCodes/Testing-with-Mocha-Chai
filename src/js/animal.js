export class Animal {

  constructor (infoObj) {

    let info = infoObj || {};

    this.species = info.species;
    this.id = Math.random();
  }

}
