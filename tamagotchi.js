// Create class below
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    console.log(
      `Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`
    );
  }

  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("I don't need medicine!");
      this.energy -= 1;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
