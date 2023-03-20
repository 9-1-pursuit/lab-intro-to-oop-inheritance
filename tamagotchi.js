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

  //     - play: increases mood by 2, reduces energy and full by 1,
  //   - will not play if tamagotchi is sick,
  //   - if asked to play when sick, reduce mood and energy by 1
  //   - will not play if mood is above 9, reduce energy by 2 and full by 1
  //   - will not play if energy is less than or equal to 3
  //     - console log "I am too tired to play" - reduce energy by 1

  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.energy <= 3) {
      console.log(`I am too tired to play`);
      this.energy -= 1;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  //     - timePasses:
  //   - if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
  //     -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
