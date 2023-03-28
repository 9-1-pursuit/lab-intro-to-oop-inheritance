// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = "Banana"
    this.daysToSpoil = 3
    this.fresh = true
  }
  prepare() {
    console.log(`${this.name} is being prepared`)
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      )
    } else {
      console.log(`eeewww what an old ${this.name} has spoiled.`)
    }
  }
  aDayPasses() {
    this.daysToSpoil--
    this.isFresh()
  }
}
// Do not edit below this line
module.exports = Food
