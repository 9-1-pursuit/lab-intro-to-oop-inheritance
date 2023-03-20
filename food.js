// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil; // value is not known yet =>
    this.fresh = fresh || true;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
    return;
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
  // Day Pass =>
  aDayPasses() {
    this.daysToSpoil--;
    // if (this.daysToSpoil <= 0) {
    //   this.fresh = false;
    // }
    this.isFresh();
  }
}
// create a new Food 
const applePie = new Food("applePie", 6)
applePie.prepare() // applePie is being prepared 
applePie.isFresh()
// Spoil decrement every time day pass is called 
applePie.aDayPasses() // there are 6 days before applePie spoils
applePie.aDayPasses()
applePie.aDayPasses()
applePie.aDayPasses() // there are 3 days before applePie spoils
// ...  applePie has spoiled. 

// Do not edit below this line
module.exports = Food;
