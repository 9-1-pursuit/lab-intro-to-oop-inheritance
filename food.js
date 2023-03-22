// Create class below

class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh || true;
  }
  prepare() {
    return console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    console.log((this.daysToSpoil = this.daysToSpoil - 1));
    this.isFresh();
  }
}

let iceCream = new Food("ice cream", 10, true);
console.log(iceCream.name);
console.log(iceCream.prepare());
console.log(iceCream.isFresh());
console.log(iceCream.aDayPasses());
// Do not edit below this line
module.exports = Food;
