// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`food ${this.name} is being prepared`);
  }

  isfresh() {
    if (this.daysToSpoil >= 1) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} is spoiled.`);
    }
  }
}
const banana = new Food("banana", 1, false);
console.log(banana.prepare(), banana.isfresh());

// Do not edit below this line
module.exports = Food;
