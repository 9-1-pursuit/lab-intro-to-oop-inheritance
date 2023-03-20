// Create class below

class Food {
  // attributes
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  // prepare: console logs the food name is being prepared
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  // isFresh: console logs a message if the food is fresh with the number of days left
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
      // Else console logs a different message if the food is no longer fresh (0 or less days left)
    } else {
      console.log(`${this.name} has spoiled.`);
      this.fresh = false;
    }
  }
  // aDayPasses: decreases the daysToSpoil attribute by 1, calls the isFresh method to check freshness
  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

// Do not edit below this line
module.exports = Food;
