// Create class below
class Tamagotchi {
  // attributes
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }
  // greet: Tamagotchi console logs Hello, I'm <name>!
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  // status: Tamogotchi console logs energy, full, mood, and sick values
  status() {
    console.log(
      `Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`
    );
  }
  // eat: increases fullness by two, decreases energy by 1. if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    // if tamagotchi is sick - set full to 9 - decrease energy by 3
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
      // if tamagotchi is not sick, console log refusal to take medicine, reduce energy by 1
    } else {
      console.log("I don't need medicine!");
      this.energy -= 1;
    }
  }

  play() {
    // if asked to play when sick, reduce mood and energy by 1
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
      // will not play if mood is above 9, reduce energy by 2 and full by 1
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
      // will not play if energy is less than or equal to 3, console log "I am too tired to play" - reduce energy by 1
    } else if (this.energy <= 3) {
      console.log("I'm too tired to play.");
      this.energy -= 1;
      // increases mood by 2, reduces energy and full by 1
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  // sleep: increases energy by 4 and decreases full by 3
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    // if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
    if (!this.sick) {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
      // if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    // if energy, mood, or full is less than or equal to 0, set rehomed to true
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
    // logs a message that the tamagotchi has been rehomed
    console.log(`${this.name} has been rehomed.`);
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
