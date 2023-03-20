// Create class below
class Tamagotchi {
  consructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  // - greet: Tamagotchi console logs `Hello, I'm <name>!`
}
// Do not edit below this line
module.exports = Tamagotchi;
