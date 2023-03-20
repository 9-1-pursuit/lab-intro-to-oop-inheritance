// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil; // value is not known yet =>
    this.fresh = fresh || true;
  }
  prepared(name) {
    console.log(`${name} is being prepared`);
  }
  isFresh(daysToSpoil, name) {
    if (daysToSpoil) {
      console.log(`There are ${daysToSpoil} days left before ${name} spoils`);
    } else {
      `${name} has spoiled.`;
    }
  }
}
// Do not edit below this line
module.exports = Food;
