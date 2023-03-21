// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil; 
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
  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

const applePie = new Food("applePie", 6)
applePie.prepare() 
applePie.isFresh()
applePie.aDayPasses() 
applePie.aDayPasses()
applePie.aDayPasses()
applePie.aDayPasses() 


// Do not edit below this line
module.exports = Food;
