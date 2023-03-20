// Create class below
class Tamagotchi {
  constructor(
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
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  // - status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
  status() {
    console.log(`${this.energy} ${this.full} ${this.mood} ${this.sick}`);
  }
  // - eat: increases fullness by two, decreases energy by 1,
  eat() {
    this.full += 2;
    this.energy--;
    // - if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)
    if (this.full > 10) {
      this.sick = true;
    }
  }
  //     - medicate:
  //   - if tamagotchi is sick - set full to 9 - decrease energy by 3
  //   - if tamagotchi is not sick
  //     - console log refusal to take medicine
  //       - reduce energy by 1
  medicate() {
    if (this.sick) {
      this.sick = false;
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log(`refusal to take medicine`);
      this.energy--;
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
